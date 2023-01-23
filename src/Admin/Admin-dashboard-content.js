import React from "react";

function Admin_dashboard_content() {
  return (
    <>
      <div className=" w-full bg-blue-100 relative h-screen">
        <main>
          <div className="pt-6 px-4">
            <div className="xl:gap-4 my-4">
              <div className="heading-top">
                <h3 className="common-text-font-fam text-3xl font-bold">Home</h3>
              </div>
              <div className="bg-white rounded-md mb-8 mt-3 p-4 sm:p-6 text-center">
                <div className=" justify-between mb-12 mt-12">
                  <h3 className="terms-privacy-fight  welcom-home text-black text-4xl font-medium ">
                    Welcome Admin
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

export default Admin_dashboard_content;
