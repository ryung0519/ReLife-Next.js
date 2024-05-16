
export default function Component() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[#0c0032] bg-gradient-to-r from-[#190061] to-[#240090] text-white p-12">
        <h1 className="text-4xl font-bold mb-8">Write the contents of the one-on-one consultation</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">PHONE</h2>
            <p className="text-xl">(123) 123456-7890</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">EMAIL</h2>
            <p className="text-xl">contact@example.com</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">SOCIAL</h2>
            <div className="flex space-x-4 mt-4">
              <InstagramIcon className="h-8 w-8 bg-white text-[#833AB4] rounded-full p-1" />
              <TwitterIcon className="h-8 w-8 bg-white text-[#34526f] rounded-full p-1" />
              <FacebookIcon className="h-8 w-8 bg-white text-[#3b5998] rounded-full p-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full aspect-video">
        <img
          alt="Background Image"
          className="w-full h-full object-cover"
          height={1080}
          src="/placeholder.svg"
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
          width={1920}
        />
      </div>
    </div>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}