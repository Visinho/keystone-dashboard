import React from "react";
import { UilEllipsisH } from "@iconscout/react-unicons";
import image1 from "@/assets/images/1.webp";
import image2 from "@/assets/images/2.jpg";
import image3 from "@/assets/images/3.webp";
import image4 from "@/assets/images/4.webp";
import image5 from "@/assets/images/5.jpg";
function LatestProducts() {
  return (
    <div className="p-4 bg-white rounded-md w-full h-auto flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2 className="text-slate-500">Latest Added Products</h2>
        <UilEllipsisH className="text-slate-500 h-5 w-5" />
      </div>
      <table className="w-full ">
        <tbody className="font-extralight text-slate-600">
          <tr className="text-xs text-left">
            <td>
              <img src={image1} alt={{}} className="w-12 h-12" />
            </td>
            <td>
              <p className="font-semibold">PSG Stadium 20/21</p>
              <span className="text-slate-400">3 Variants</span>
            </td>
            <td>
              <span className="text-slate-400">SKU:</span> 8600844
            </td>
            <td>Jerseys</td>
            <td>12.11.2020</td>
            <td>
              <span className="bg-emerald-100 py-1 px-3 rounded-full text-emerald-500">
                published
              </span>
            </td>
          </tr>
          <tr className="text-xs text-left">
            <td>
              <img src={image2} alt={{}} className="w-12 h-12" />
            </td>
            <td>
              <p className="font-semibold">Los Angeles Lakers City</p>
              <span className="text-slate-400">5 Variants</span>
            </td>
            <td>
              <span className="text-slate-400">SKU:</span> 860847
            </td>
            <td>Jerseys</td>
            <td>12.11.2020</td>
            <td>
              <span className="bg-orange-100 py-1 px-3 rounded-full text-orange-500">
                pending
              </span>
            </td>
          </tr>
          <tr className="text-xs text-left">
            <td>
              <img src={image3} alt={{}} className="w-12 h-12" />
            </td>
            <td>
              <p className="font-semibold">Miami Heat Courtside</p>
              <span className="text-slate-400">4 Variants</span>
            </td>
            <td>
              <span className="text-slate-400">SKU:</span> 8609824
            </td>
            <td>Outwears</td>
            <td>10.11.2020</td>
            <td>
              <span className="bg-emerald-100 py-1 px-3 rounded-full text-emerald-500">
                published
              </span>
            </td>
          </tr>
          <tr className="text-xs text-left">
            <td>
              <img src={image4} alt={{}} className="w-12 h-12" />
            </td>
            <td>
              <p className="font-semibold">Liverpool FC 20/21 Stadium</p>
              <span className="text-slate-400">3 Variants</span>
            </td>
            <td>
              <span className="text-slate-400">SKU:</span> 8609474
            </td>
            <td>Jerseys</td>
            <td>07.11.2020</td>
            <td>
              <span className="bg-emerald-100 py-1 px-3 rounded-full text-emerald-500">
                published
              </span>
            </td>
          </tr>
          <tr className="text-xs text-left">
            <td>
              <img src={image5} alt={{}} className="w-12 h-12" />
            </td>
            <td>
              <p className="font-semibold">Liverpool FC 20/21 Stadium</p>
              <span className="text-slate-400">3 Variants</span>
            </td>
            <td>
              <span className="text-slate-400">SKU:</span> 8609474
            </td>
            <td>Jerseys</td>
            <td>07.11.2020</td>
            <td>
              <span className="bg-emerald-100 py-1 px-3 rounded-full text-emerald-500">
                published
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LatestProducts;
