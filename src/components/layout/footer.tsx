export default function Footer() {
  return (
    <footer className='w-full'>
        <div className=''>
          <div className='mx-14 my-8 flex justify-between items-start border-t-[1px] mt-10 pt-10 border-t-gray-1'>
            <img src='/logo-footer.png' alt='Logo IFRN' width={200} />

            <div>
              <p className='font-bold text-green-3 max-w-[500px]'>
                Instituto Federal de Educação, Ciência e Tecnologia do Estado do Rio Grande do Norte
              </p>

              <p className='text-gray-2'>
                <span className='font-bold inline'>Endereço:</span> Rua Dr. Nilo Bezerra Ramalho,
                1692, Tirol
              </p>

              <p className='text-gray-2'>
                <span className='font-bold inline'>CEP</span> 59015-300
              </p>

              <p className='text-gray-2'>
                <span className='font-bold inline'>E-mail</span> comunicacao.reitoria@ifrn.edu.br
              </p>

              <p className='text-gray-2'>
                <span className='font-bold inline'>Telefone</span> (84) 4005-0890
              </p>
            </div>

            <div className='flex justify-center p-4 items-center border-[1px] border-blue-700 rounded-2xl'>
              <div>
                <img src='/e-mec.png' alt='QRcode' className='w-32 h-12' />
                <p className='text-blue-700 font-medium text-[18px] max-w-[300px]'>
                  Consulte o cadastro da instituição no Sistema do e-MEC
                </p>
              </div>

              <img src="/e-mec-qr-code.png" alt="QR Code" className='w-32 h-32' />
            </div>
          </div>
        </div>

        <div className='bg-green-3 py-2'>
          <div className='mx-14 my-8 text-white'>
            <p>
              Copyright © 2025 | Instituto Federal de Educação, Ciência e Tecnologia do Estado do
              Rio Grande do Norte
            </p>
          </div>
        </div>
      </footer>
  )
}