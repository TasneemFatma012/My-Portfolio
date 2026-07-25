import { FaEye, FaDownload } from "react-icons/fa";


export default function CertificateCard({certificate}){


return(

<div className="certificate-card">


<img
src={certificate.image}
alt={certificate.title}
className="certificate-img"
/>



<h3>
{certificate.title}
</h3>


<p>
{certificate.issuer}
</p>


<span>
✔ Verified
</span>



<div className="certificate-actions">


<a

href={certificate.pdf}

target="_blank"

rel="noreferrer"

className="download-btn icon-btn"

>

<FaEye/>

View PDF

</a>



<a

href={certificate.pdf}

download

className="download-btn icon-btn"

>

<FaDownload/>

Download

</a>



</div>



</div>


)

}