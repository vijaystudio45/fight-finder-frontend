import React from "react";

function Userdashboard() {
  return (
    <>
      <div className=" w-full bg-indigo-100 relative h-screen	">
        <main>
          <div className="pt-6 px-4">
            <div className="xl:gap-4 my-4">
              <div className="heading-top">
                <h3 className="text-black text-2xl font-medium">Home</h3>
              </div>
              <div className="bg-white rounded-md mb-8 mt-3 p-4 sm:p-6 h-full  text-center">
                <div className=" justify-between mb-12 mt-12">
                  <h3 className="welcom-home text-black text-4xl font-medium ">
                    Welcome User
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Userdashboard;
