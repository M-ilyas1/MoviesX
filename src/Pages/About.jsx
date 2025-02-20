const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-950 py-15">
      <div className="w-[70%] flex bg-gray-800 p-8 shadow-lg rounded-xl">
    
        <div className="w-1/2 flex flex-col justify-center p-6">
          <h2 className="text-2xl font-bold text-white">About Us</h2>
          <p className="mt-6 text-white">
            Welcome to our platform! We are committed to providing high-quality 
            solutions that make a difference. Our team is dedicated to innovation, 
            excellence, and creating a seamless experience for our users.
          </p>
          <p className="mt-4 text-white">
            With a strong passion for technology and a user-first approach, we 
            continuously strive to enhance our services and exceed expectations.
          </p>
        </div>
  
        <div className="w-1/2 flex items-center justify-center">
          <img 
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa177cd-d8d3-41c3-b280-304677328f14/de3i302-c1a020da-9333-4af6-9f85-d4b4e71e8ae5.jpg/v1/fill/w_1280,h_1024,q_75,strp/bollywood_movie_poster_by_yferdianto_de3i302-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2ZhYTE3N2NkLWQ4ZDMtNDFjMy1iMjgwLTMwNDY3NzMyOGYxNFwvZGUzaTMwMi1jMWEwMjBkYS05MzMzLTRhZjYtOWY4NS1kNGI0ZTcxZThhZTUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.iiEgd9A3ibX56rci1naACpjZ8XJXefNmGyTlES6PaZ8" 
            alt="About Us" 
            className="rounded-lg shadow-lg w-full h-auto" 
          />
        </div>
      </div>
      <div className="w-[70%] mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRETjjKwusAGNjlhxKSri-TUz7paEXwv1lTqXWEgt0wbisLcv7JJlMxNLdfbb57OLIRTeA&usqp=CAU" alt="Movie 1" className="rounded-lg shadow-lg w-full h-100 border-2 border-white" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTioaiR3ZGfCGWp7nq4lzFv4KOo0xYwIBRNxKg2ZXGahCzBE6vL_cepEU-SGeU7icA8Pvo&usqp=CAU" alt="Movie 2" className="rounded-lg shadow-lg w-full h-100 border-2 border-white" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVAk7y37B11YzAxPn1qM3ljtjmAY0DHOokPXLh_N6xg54qdcFolYOcLMF-gE06yl1XQqE&usqp=CAU" alt="Movie 3" className="rounded-lg shadow-lg w-full h-100 border-2 border-white" />
        <img src="https://rukminim2.flixcart.com/image/850/1000/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=90&crop=false" alt="Movie 4" className="rounded-lg shadow-lg w-full h-100 border-2 border-white" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb7kw35YJ1J0V_2aTdnMe-WRJ6syja_HbnnQ&s" alt="Movie 5" className="rounded-lg shadow-lg w-full h-100 border-2 border-white" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfvXaj4OQ6Ctstr3cWtN6VGSezrxHf9MdHHzlVgjrvHQfyzU65GcWgp3atuCt_gI9IuM&usqp=CAU" alt="Movie 6" className="rounded-lg shadow-lg w-full h-100 border-2 border-white" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr00EhBiBfpwFlnVsHNsE03s2H5hzl5wfxC3M70Vci0XlgW1jL2NaTnazLWHnVmmNKg4U&usqp=CAU" alt="Movie 7" className="rounded-lg shadow-lg w-full h-100 border-2 border-white" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAckaP3F7383CZJLDqy3H1xPy3UCwklNVF_g&s" alt="Movie 8" className="rounded-lg shadow-lg w-full h-100 border-2 border-white" />
      </div>
    </div>
  );
};

export default AboutUs;