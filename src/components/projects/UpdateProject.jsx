import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

const UpdateProject = ({ project, setUpdate, refetch, isFetching }) => {
  console.log(project?.title);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const form = e.target;
      const title = form.title.value;
      const description = form.description.value;
      const status = form.status.value;

      const tag = form.tag.value;
      const startDate = form.startDate.value;
      const endDate = form.endDate.value;
      const projectData = {
        title,
        description,
        tag,
        startDate,
        endDate,
        status,
      };

      const { data } = await axios.patch(
        `${process.env.NEXT_PUBLIC_API}/project/${project?._id}`,
        projectData
      );
      console.log({ data });
      if (data?.data) {
        toast.success("Project updated succesfully");
        refetch();
      }
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setLoading(false);
      setUpdate(false);
    }
    console.table(projectData);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white  p-6 rounded-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">New Payment Request</h2>
          <button
            onClick={() => setUpdate(false)}
            className="text-gray-500 text-4xl hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <div className="">
          {/* Update Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 border p-6 rounded-xl"
          >
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Project Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={project?.title}
                placeholder="Title"
                className="mt-1 block w-full rounded-md border-gray-300  border py-1.5 px-3  "
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                defaultValue={project?.description}
                rows={2}
                className="mt-1 block w-full rounded-md border-gray-300  border py-1.5 px-3  "
                required
              ></textarea>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <div className="md:flex-1">
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  defaultValue={project?.status}
                  className="mt-1 block w-full rounded-md border-gray-300 border py-1.5 px-3"
                  required
                >
                  <option value="pending">Pending</option>
                  <option value="in-progress">In-Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div className="md:flex-1">
                <label
                  htmlFor="tag"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tag
                </label>
                <input
                  type="text"
                  id="tag"
                  name="tag"
                  placeholder="Tag"
                  className="mt-1 block w-full rounded-md border-gray-300  border py-1.5 px-3  "
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  defaultValue={project?.startDate}
                  className="mt-1 block w-full rounded-md border-gray-300  border py-1.5 px-3  "
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="endDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  defaultValue={project?.endDate}
                  className="mt-1 block w-full rounded-md border-gray-300  border py-1.5 px-3  "
                  required
                />
              </div>
            </div>

            <div>
              <button
                disabled={loading}
                type="submit"
                className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium disabled:cursor-not-allowed disabled:bg-orange-300 text-white bg-primary hover:bg-orange-600"
              >
                Create Project{" "}
                {loading && (
                  <ImSpinner9 size={20} className="animate-spin inline-block" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProject;
