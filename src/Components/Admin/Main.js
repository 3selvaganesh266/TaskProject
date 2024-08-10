import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import {
  Box, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, TextField,
  Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  IconButton, MenuItem, Select, CssBaseline
} from '@mui/material';
import { styled } from '@mui/system';
import { Edit, Delete, Logout } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { blue } from '@mui/material/colors';

const drawerWidth = 240;

const MainContent = styled('div')({
  flexGrow: 1,
  padding: '40px',
  minHeight: '100vh',
});

const AppBarStyled = styled(AppBar)({
  zIndex: 1201,
  background: 'linear-gradient(135deg, #333333 0%, #555555 100%)', // Darker gradient
});

const ButtonStyled = styled(Button)({
  background: 'linear-gradient(135deg, #333333 0%, #555555 100%)', // Darker gradient
  color: '#fff',
});


const FormContainer = styled(Box)({
  background: '#fff',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: '0 auto',
});

const SidebarStyled = styled(Drawer)({
  '& .MuiDrawer-paper': {
    background: 'linear-gradient(135deg, #333333 0%, #555555 100%)',// width: drawerWidth,
     // Match admin dashboard background color
    color: '#fff', // Text color for visibility
  },
});

const Main = () => {
  const { isAuthenticated, username, logout } = useAuth();
  const [selectedSection, setSelectedSection] = useState('TaskCreation');
  const [employeeName, setEmployeeName] = useState('');
  const [taskName, setTaskName] = useState('');
  const [assignedByHrName, setAssignedByHrName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [projectName, setProjectName] = useState('');
  const [status, setStatus] = useState('Not Yet Started');
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isEditingTask, setIsEditingTask] = useState(null);
  const [isEditingProject, setIsEditingProject] = useState(null);
const navigate=useNavigate();
  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tasks');
      const data = await response.json();
      setTasks(data.task || []);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/projects');
      const data = await response.json();
      setProjects(data.projects || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchProjects();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();
    const taskData = { emp_id: employeeName, taskname: taskName, hr_name: assignedByHrName, deadline, status };
    if (isEditingTask !== null) {
      await fetch(`http://localhost:5000/api/tasks/${tasks[isEditingTask].id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData),
      });
      const updatedTasks = [...tasks];
      updatedTasks[isEditingTask] = { ...taskData, id: tasks[isEditingTask].id };
      setTasks(updatedTasks);
      setIsEditingTask(null);
    } else {
      await fetch('http://localhost:5000/api/tasks/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData),
      });
      setTasks([...tasks, { ...taskData, id: Date.now() }]);
    }
    setEmployeeName('');
    setTaskName('');
    setAssignedByHrName('');
    setDeadline('');
    setStatus('Not Yet Started');
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    const projectData = { emp_id: employeeName, project_name: projectName, assigned_by_hr: assignedByHrName, deadline, status };
    if (isEditingProject !== null) {
      await fetch(`http://localhost:5000/api/projects/${projects[isEditingProject].id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectData),
      });
      const updatedProjects = [...projects];
      updatedProjects[isEditingProject] = { ...projectData, id: projects[isEditingProject].id };
      setProjects(updatedProjects);
      setIsEditingProject(null);
    } else {
      await fetch('http://localhost:5000/api/projects/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectData),
      });
      setProjects([...projects, { ...projectData, id: Date.now() }]);
    }
    setEmployeeName('');
    setProjectName('');
    setAssignedByHrName('');
    setDeadline('');
    setStatus('Not Yet Started');
  };

  const handleEditTask = (index) => {
    setIsEditingTask(index);
    setEmployeeName(tasks[index].emp_id);
    setTaskName(tasks[index].taskname);
    setAssignedByHrName(tasks[index].hr_name);
    setDeadline(tasks[index].deadline);
    setStatus(tasks[index].status);
    setSelectedSection('TaskCreation');
  };

  const handleDeleteTask = async (index) => {
    await fetch(`http://localhost:5000/api/tasks/${tasks[index].id}`, {
      method: 'DELETE',
    });
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEditProject = (index) => {
    setIsEditingProject(index);
    setEmployeeName(projects[index].emp_id);
    setProjectName(projects[index].project_name);
    setAssignedByHrName(projects[index].assigned_by_hr);
    setDeadline(projects[index].deadline);
    setStatus(projects[index].status);
    setSelectedSection('ProjectCreation');
  };

  const handleDeleteProject = async (index) => {
    await fetch(`http://localhost:5000/api/projects/${projects[index].id}`, {
      method: 'DELETE',
    });
    setProjects(projects.filter((_, i) => i !== index));
  };

  const handleLogout = () => {

    navigate('/');
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'TaskCreation':
        return (
          <FormContainer component="form" sx={{ mt: 2 }} onSubmit={handleAddTask}>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
              Task Creation
            </Typography>
            <TextField
              label="Employee Id"
              variant="outlined"
              fullWidth
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              label="Task Name"
              variant="outlined"
              fullWidth
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              label="Assigned by HR Name"
              variant="outlined"
              fullWidth
              value={assignedByHrName}
              onChange={(e) => setAssignedByHrName(e.target.value)}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              label="Deadline"
              variant="outlined"
              fullWidth
              type="date"
              InputLabelProps={{ shrink: true }}
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              sx={{ mb: 2 }}
              required
            />
            <Select
              label="Status"
              variant="outlined"
              fullWidth
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              sx={{ mb: 2 }}
              required
            >
              <MenuItem value="Not Yet Started">Not Yet Started</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonStyled variant="contained" type="submit">
                {isEditingTask !== null ? 'Update Task' : 'Add Task'}
              </ButtonStyled>
            </Box>
          </FormContainer>
        );
      case 'ProjectCreation':
        return (
          <FormContainer component="form" sx={{ mt: 2 }} onSubmit={handleAddProject}>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
              Project Creation
            </Typography>
            <TextField
              label="Employee Id"
              variant="outlined"
              fullWidth
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              label="Project Name"
              variant="outlined"
              fullWidth
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              label="Assigned by HR Name"
              variant="outlined"
              fullWidth
              value={assignedByHrName}
              onChange={(e) => setAssignedByHrName(e.target.value)}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              label="Deadline"
              variant="outlined"
              fullWidth
              type="date"
              InputLabelProps={{ shrink: true }}
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              sx={{ mb: 2 }}
              required
            />
            <Select
              label="Status"
              variant="outlined"
              fullWidth
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              sx={{ mb: 2 }}
              required
            >
              <MenuItem value="Not Yet Started">Not Yet Started</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonStyled variant="contained" type="submit">
                {isEditingProject !== null ? 'Update Project' : 'Add Project'}
              </ButtonStyled>
            </Box>
          </FormContainer>
        );
      case 'TaskDashboard':
        return (
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Employee Id</TableCell>
                  <TableCell>Task Name</TableCell>
                  <TableCell>Assigned by HR Name</TableCell>
                  <TableCell>Deadline</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map((task, index) => (
                  <TableRow key={task.id}>
                    <TableCell>{task.emp_id}</TableCell>
                    <TableCell>{task.taskname}</TableCell>
                    <TableCell>{task.hr_name}</TableCell>
                    <TableCell>{task.deadline}</TableCell>
                    <TableCell>{task.status}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEditTask(index)} color="primary">
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteTask(index)} color="error">
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      case 'ProjectDashboard':
        return (
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Employee Id</TableCell>
                  <TableCell>Project Name</TableCell>
                  <TableCell>Assigned by HR Name</TableCell>
                  <TableCell>Deadline</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projects.map((project, index) => (
                  <TableRow key={project.id}>
                    <TableCell>{project.emp_id}</TableCell>
                    <TableCell>{project.project_name}</TableCell>
                    <TableCell>{project.assigned_by_hr}</TableCell>
                    <TableCell>{project.deadline}</TableCell>
                    <TableCell>{project.status}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEditProject(index)} color="primary">
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteProject(index)} color="error">
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      default:
        return <Typography variant="h6">Select an option from the sidebar</Typography>;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarStyled position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Time and Task Management System
          </Typography>
        </Toolbar>
      </AppBarStyled>
      <SidebarStyled
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          <ListItem button onClick={() => setSelectedSection('TaskCreation')}>
            <ListItemText primary="Task Creation" />
          </ListItem>
          <ListItem button onClick={() => setSelectedSection('ProjectCreation')}>
            <ListItemText primary="Project Creation" />
          </ListItem>
          <ListItem button onClick={() => setSelectedSection('TaskDashboard')}>
            <ListItemText primary="Task Dashboard" />
          </ListItem>
          <ListItem button onClick={() => setSelectedSection('ProjectDashboard')}>
            <ListItemText primary="Project Dashboard" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" />
            <IconButton edge="end" color="inherit">
              <Logout />
            </IconButton>
          </ListItem>
        </List>
      </SidebarStyled>
      <MainContent>
        <Toolbar />
        {renderContent()}
      </MainContent>
    </Box>
  );
};

export default Main;
