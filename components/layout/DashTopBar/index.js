import React from 'react'
import styles from './index.module.scss'
import { useSelector } from 'react-redux';

const DashTopBar = () => {

  const { userInfo } = useSelector(redux => redux.User)

  return (
    <div className={styles.container}>
      <div className={styles.inside}>
        <i>
          <svg width="29" height="33" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.4868 6.83039C12.0745 6.35712 11.7955 5.77713 11.8421 5.12723C11.9765 3.25469 14.6419 3.66662 15.1604 4.61172C15.6789 5.55682 15.6173 7.95414 14.9472 8.12305C14.6799 8.19042 14.1106 8.0254 13.5313 7.68388L13.8949 10.2H11.7476L12.4868 6.83039Z" fill="#B28B67"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M13.9363 3.52245C13.6533 3.47706 12.8913 3.44585 12.7507 3.44587C12.6609 3.44587 12.5636 3.46594 12.5104 3.3853C12.4669 3.31926 12.4828 3.20757 12.4698 3.13094C12.4547 3.04192 12.4333 2.95404 12.4116 2.86639C12.3499 2.61697 12.2566 2.37967 12.126 2.15688C11.881 1.7389 11.5221 1.4115 11.0689 1.22098C10.5686 1.01062 10.0023 0.962453 9.46412 1.00512C8.88815 1.05077 8.36676 1.23671 7.82295 1.4117C7.30473 1.57844 6.76194 1.64408 6.21993 1.56265C5.67384 1.48062 5.26122 1.19117 4.8006 0.916441C4.32905 0.635189 3.79017 0.45124 3.23272 0.493525C2.71236 0.53301 2.23277 0.743128 1.80248 1.02382C1.3999 1.28643 1.06772 1.6024 0.880175 2.04709C0.678422 2.52544 0.678607 3.05052 1.01038 3.47327C1.49127 4.08606 2.38402 4.24452 3.12675 4.22877C3.55636 4.21969 3.97829 4.14299 4.38389 4.00348C4.9248 3.81742 5.39224 3.50206 5.89829 3.24619C6.13577 3.12612 6.38125 3.02751 6.63856 2.95648C6.88824 2.88752 7.13417 2.85589 7.36024 3.0034C7.59939 3.15945 7.81369 3.31273 8.08728 3.41042C8.34974 3.50414 8.62774 3.55655 8.90737 3.55444C9.45143 3.55033 9.98775 3.38455 10.5162 3.27351C10.9471 3.18298 11.4081 3.09274 11.8474 3.17977C12.0307 3.21609 12.2985 3.29108 12.3647 3.47738C11.2503 3.67489 10.8127 5.02263 11.1268 6.01199C11.2964 6.54599 12.3156 7.17023 12.7119 6.8895C12.9629 6.71165 12.8105 6.47816 12.7119 6.32403C12.523 6.02886 12.4583 5.6497 12.8079 5.44419C13.1094 5.26695 13.4264 5.68785 13.4324 5.68739C13.5152 5.681 14.2313 5.28499 14.7246 4.7071C15.2113 4.73531 15.2851 4.42149 15.1689 4.16484C15.0527 3.90819 14.3274 3.5852 13.9363 3.52245Z" fill="#191847"/>
            <path d="M10.8529 32.6875C14.6578 32.6875 17.7423 29.8081 17.7423 26.2563C17.7423 22.7044 14.6578 19.825 10.8529 19.825C7.0479 19.825 3.96338 22.7044 3.96338 26.2563C3.96338 29.8081 7.0479 32.6875 10.8529 32.6875Z" fill="#9192FF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M23.872 31.6953C22.7255 29.2139 21.8965 27.0533 21.5637 25.9133C20.9939 23.9614 20.5604 22.2438 20.4508 21.6024C20.1896 20.0729 22.4606 19.9838 22.7608 20.744C23.2151 21.8945 24.0083 25.6746 24.9613 31.3844L23.872 31.6953ZM10.5743 23.9081C11.6261 23.5015 15.3096 22.2291 17.0861 21.8692C17.5966 21.7657 18.0914 21.6696 18.5566 21.5828C19.9393 21.3246 20.6557 23.7641 19.3239 23.9515C16.0074 24.4183 11.3057 24.9003 10.9033 24.9544C10.3394 25.0302 9.91325 24.1636 10.5743 23.9081Z" fill="#B28B67"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M19.4052 20.9114L13.7158 18.0791V17.4625H14.3924C19.8967 18.8342 22.7093 19.7132 22.8304 20.0996C22.8317 20.1037 22.8329 20.1079 22.834 20.1121C22.8367 20.1156 22.8395 20.1192 22.8421 20.1228C23.933 21.5899 24.5862 28.7524 24.8007 29.2887L22.7104 29.5936C21.9108 26.6941 19.3527 24.6741 19.4206 21.2013C19.4023 21.0994 19.3976 21.0028 19.4052 20.9114Z" fill="#3DA0B8"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M14.1885 22.5936C13.6679 22.4917 13.1885 22.4007 12.7783 22.3303C10.1287 21.8759 9.35605 20.4888 9.81289 17.4625H14.6948C15.4922 17.6866 19.6366 19.3862 21.7869 20.2902C23.2101 20.8885 22.7614 23.0454 21.9555 23.6067C21.9511 23.6412 21.9366 23.6646 21.9108 23.675C17.5754 25.4323 14.1457 24.5102 13 24.8048L12.47 23.17L14.1885 22.5936Z" fill="#2A788B"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.9252 23.6457C10.6428 23.6708 10.4424 23.7114 10.3242 23.7676C10.1803 23.836 9.9822 23.9594 9.72989 24.1379C9.81242 24.3028 10.5541 25.7844 11.9549 28.5826C12.3993 28.5144 12.5747 28.3486 12.4809 28.0851C12.3871 27.8216 12.3115 27.6016 12.2539 27.4252L12.1521 24.9163C12.1502 24.8681 12.1088 24.8301 12.0597 24.8315C12.0588 24.8315 12.058 24.8315 12.0572 24.8316L11.6646 24.8537C11.4404 24.6751 11.2923 24.5137 11.2202 24.3697C11.1616 24.2527 11.1286 24.0684 11.121 23.8167L11.121 23.8167C11.1181 23.7201 11.0361 23.6433 10.9379 23.6451C10.9336 23.6451 10.9294 23.6454 10.9252 23.6457Z" fill="#545454"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M23.3503 31.2352C23.2502 31.4965 23.2002 31.692 23.2002 31.8217C23.2002 31.9795 23.2271 32.2098 23.2808 32.5125C23.468 32.5125 25.1502 32.5125 28.3273 32.5125C28.4585 32.0885 28.3827 31.8596 28.1002 31.8258C27.8177 31.792 27.5829 31.7615 27.3961 31.7342L25.0505 30.7116C25.0054 30.692 24.9525 30.7118 24.9324 30.7559C24.932 30.7567 24.9317 30.7574 24.9314 30.7582L24.7806 31.1159C24.519 31.2352 24.3065 31.2949 24.143 31.2949C24.0101 31.2949 23.8266 31.2424 23.5925 31.1375L23.5925 31.1375C23.5027 31.0972 23.3964 31.1358 23.3552 31.2236C23.3535 31.2274 23.3518 31.2313 23.3503 31.2352Z" fill="#545454"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M19.2634 15.0664L22.5054 13.6741C23.0734 13.1206 23.6218 12.7 24.1507 12.4121C24.3088 12.3629 24.579 12.348 24.2908 12.7598C24.0025 13.1716 23.7182 13.6174 23.8334 13.7617C23.9486 13.906 24.2822 13.7467 24.4141 13.9814C24.502 14.1378 23.9395 14.325 22.7267 14.5428L20.2986 16.3634L19.2634 15.0664ZM6.15625 15.45L7.98972 15.8057C6.14585 19.1662 5.15702 20.9472 5.02322 21.1488C4.72218 21.6025 5.00306 22.434 5.10682 22.8718C4.4559 23.02 4.7126 22.0619 3.88889 22.2619C3.13704 22.4445 2.49956 22.9131 1.79849 22.2811C1.7123 22.2034 1.6492 21.9606 1.94307 21.836C2.67522 21.5257 3.7569 20.9446 3.9323 20.719C4.17148 20.4114 4.9128 18.655 6.15625 15.45Z" fill="#B28B67"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M12.9728 8.74154L13.7465 8.61177C15.4317 10.2104 16.1194 14.0511 17.2424 14.5595C18.3042 15.0401 19.8094 14.575 21.5985 13.947L22.1464 15.1441C20.5208 16.864 17.0577 18.3171 15.6539 17.4876C13.4096 16.1613 12.8915 11.4244 12.9728 8.74154Z" fill="#FF5E63"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.6001 18.25C12.7023 18.25 14.9842 18.25 16.4459 18.25C16.7587 18.25 16.6997 17.8082 16.6545 17.5853C16.1326 15.0128 14.0954 12.2397 14.0954 8.57778L12.1207 8.27496C10.4875 10.8438 9.92263 14.0066 9.6001 18.25Z" fill="#EEEEFF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.91742 15.6454C7.52187 18.1071 6.34883 19.8795 5.39831 20.9625L3.96338 20.6876C4.88769 15.0816 7.56439 10.9441 11.9935 8.27496H12.3499L12.7753 8.27496C14.548 14.1844 15.0367 18.1219 14.2414 20.0875H8.07917C8.17666 18.6493 8.48926 17.1283 8.91742 15.6454H8.91742Z" fill="#FF5E63"/>
          </svg>
        </i>
        <p>{userInfo?.username}</p>
      </div>
      <div className={styles.inside}>
        <i>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C12.6193 22.0008 13.2235 21.8086 13.7285 21.4502C14.2335 21.0917 14.6143 20.5849 14.818 20H9.182C9.38566 20.5849 9.76648 21.0917 10.2715 21.4502C10.7765 21.8086 11.3807 22.0008 12 22ZM19 14.586V10C19 6.783 16.815 4.073 13.855 3.258C13.562 2.52 12.846 2 12 2C11.154 2 10.438 2.52 10.145 3.258C7.185 4.074 5 6.783 5 10V14.586L3.293 16.293C3.19996 16.3857 3.12617 16.4959 3.07589 16.6172C3.0256 16.7386 2.99981 16.8687 3 17V18C3 18.2652 3.10536 18.5196 3.29289 18.7071C3.48043 18.8946 3.73478 19 4 19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18V17C21.0002 16.8687 20.9744 16.7386 20.9241 16.6172C20.8738 16.4959 20.8 16.3857 20.707 16.293L19 14.586Z" fill="#B5B5B5"/>
          </svg>
        </i>
        <i>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.3998 20.4H10.7998V22.8H20.3998C21.7198 22.8 22.7998 21.72 22.7998 20.4V3.60001C22.7998 2.28001 21.7198 1.20001 20.3998 1.20001H10.7998V3.60001H20.3998V20.4Z" fill="#B5B5B5"/>
            <path d="M8.4002 18V13.2H18.0002V10.8H8.4002V6L1.2002 12L8.4002 18Z" fill="#B5B5B5"/>
          </svg>
        </i>
      </div>
    </div>
  )
}

export default DashTopBar