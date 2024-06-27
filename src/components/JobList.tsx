import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getJobs } from "../api/jobApi";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface Job {
  id: string;
  title: string;
  description: string;
  status: string;
  // Add other relevant fields
}

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const fetchJobs = async () => {
      if (authContext && authContext.isAuthenticated) {
        const data = await getJobs(authContext.user.token);
        setJobs(data);
      }
    };

    fetchJobs();
  }, [authContext]);

  const onDragEnd = (result: any) => {
    // Handle drag and drop logic, update job status
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="jobs">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {jobs.map((job, index) => (
              <Draggable key={job.id} draggableId={job.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {job.title}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default JobList;
