export default function Footer() {
  return (
    <>
      <footer className=" text-white text-center py-4 mt-5 bgf">
        <div className="container">
          <p className="mb-2">
            © {new Date().getFullYear()} My Website. All Rights Reserved.
          </p>
          <div>
            <a href="#" className="text-white me-3 text-decoration-none">
              Designed by 
            </a>
            <a href="#" className="text-white me-3 text-decoration-none">
              Yomna
            </a>
            <a href="#" className="text-white text-decoration-none">
              don't  contact me
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
