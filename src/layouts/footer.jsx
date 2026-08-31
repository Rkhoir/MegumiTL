export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
   

<footer class="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4 w-full absolute">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/logo.webp" class="h-12" alt="MegumiTL" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-default sm:mx-auto lg:my-8" />
        <span class="block text-sm text-body sm:text-center">© {currentYear} <a href="" class="hover:underline">MegumiTL</a>. All Rights Reserved.</span>
    </div>
</footer>


  );
}