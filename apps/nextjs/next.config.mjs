import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

/**
 * @type {import('next').NextConfig}
 */
const config = {};

const withVanillaExtract = createVanillaExtractPlugin();

export default withVanillaExtract(config);
