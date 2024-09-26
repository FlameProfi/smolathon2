using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace SmolAtonBLL.Services
{
    public static class HashPasswordService
    {
        public static string MDFive(string password)
        {
            MD5 md5 = MD5.Create();
            var b = Encoding.ASCII.GetBytes(password);
            var hash = md5.ComputeHash(b);

            var sb = new StringBuilder();
            foreach (var c in hash)
                sb.Append(c.ToString("X2"));

            return Convert.ToString(sb)
        }
    }
}
