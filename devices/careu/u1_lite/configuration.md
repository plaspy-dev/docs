---
slug: /careu/u1_lite/configuration
id: u1_lite-configuration
sidebar_label: Configuration
title: CAREU - U1 Lite+ Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the CAREU U1 Lite Plus GPS tracker to Plaspy using shared server settings
keywords:
  - CAREU U1 Lite+ configuration
  - CAREU U1 Lite+ setup
  - CAREU U1 Lite+ Plaspy
  - CAREU U1 Lite+ server configuration
  - CAREU U1 Lite+ GPS tracker setup
  - CAREU U1 Lite+ LTE configuration
  - CAREU U1 Lite+ tracking software
  - CAREU U1 Lite+ fleet tracking
  - CAREU tracker configuration
  - Plaspy tracker configuration
---

# CAREU - U1 Lite+ Configuration

This page covers the public configuration context for using the CAREU U1 Lite+ tracker with Plaspy. It provides the Plaspy server values you need to enter on the device or in the vendor configuration tool and explains the practical steps to prepare the device for reporting into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. Use this guide as a practical reference for applying the Plaspy endpoint and verifying connectivity, and consult the CAREU manufacturer documentation for device specific details.

## Configuration Overview

This configuration process prepares the CAREU U1 Lite+ to send location and device data to Plaspy using the platform's shared server endpoint and port. The goal is to ensure the tracker can establish a stable data link to Plaspy and appear correctly in the platform for monitoring and reporting.

- Configure the device network target to point to Plaspy using the provided server domain or IP.
- Select the required transport mode if the device requests UDP or TCP and set the port used by Plaspy.
- Save and apply configuration changes through the CAREU configuration tool or supported provisioning method.
- Validate that the device is reporting and visible in Plaspy by checking incoming data and device status.
- Troubleshoot connectivity issues by verifying power, SIM and mobile network signal, and firmware compatibility.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured to use either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and the platform uses the same port for all supported devices

## Typical Requirements Before Setup

- Confirm the CAREU U1 Lite+ has stable power and is powered on.
- Ensure an active and provisioned SIM card is installed if cellular data is required by the device.
- Verify access to the official CAREU configuration method such as the vendor web tool, USB or Bluetooth configuration app, or SMS commands if supported.
- Check that firmware is up to date or note the firmware version to compare behavior against manufacturer documentation.
- Confirm adequate mobile network coverage for LTE fallback to 3G or 2G as needed.
- Prepare device identifiers such as IMEI or serial number for Plaspy device registration if required.

## How This Tracker Connects to Plaspy

When configured, the CAREU U1 Lite+ sends its position and status messages to the Plaspy endpoint so the platform can display location, events, and operational telemetry. Plaspy receives these device messages on the shared server endpoint and automatically determines the tracker protocol.

- The tracker is set to report to d.plaspy.com or 54.85.159.138 on port 8888.
- The device may use UDP or TCP transport to send packets to Plaspy on port 8888.
- Plaspy automatically detects the protocol used by the tracker and parses incoming messages.
- Reported data becomes visible in Plaspy for monitoring, event generation, and historical logs.
- Validating connectivity ensures the tracker is actively communicating and being parsed by Plaspy.

## Common Configuration Workflow

1. Access the official CAREU configuration method or software provided by the manufacturer or installer.
2. In the device server or APN settings, enter d.plaspy.com or alternatively enter 54.85.159.138 if your configuration tool requires an IP.
3. Set the server port to 8888 as used by Plaspy for all devices.
4. Choose UDP or TCP if the tracker requires a transport selection and your network supports it.
5. Apply or save the configuration in the CAREU tool and confirm settings were accepted.
6. Restart the device if required by the manufacturer or your installer procedure.
7. Validate that the device reports to Plaspy by confirming the device appears and sends data in the platform.

## Example Configuration Commands

The CAREU U1 Lite+ supports multiple configuration methods depending on firmware and installed options. Exact command sets may vary by firmware version and the manufacturer tool you use. Consult the official CAREU configuration utility or SMS command reference for the precise syntax used by your device.

Typical configuration is done with the vendor software or a provisioning tool where you will enter the Plaspy server domain or IP and the port 8888, then select UDP or TCP if prompted. If you use SMS commands or a CLI provided by CAREU, follow the manufacturer SMS syntax to set the server and port as shown in the vendor documentation.

## Configuration Notes

- Firmware differences can change configuration command syntax and available menu items; always check the device firmware release notes when troubleshooting.
- TCP and UDP behave differently on unreliable networks; choose the transport that best matches your installation and network characteristics.
- If the device supports both domain and IP entry, using d.plaspy.com is preferred for DNS resilience; fallback to 54.85.159.138 is acceptable when required by the tool.
- Remote configuration features such as FOTA or vendor provisioning may simplify deployment but require correct server settings and network access.
- Keep a record of device identifiers and configuration changes to aid support and future maintenance.

## Why Use Plaspy with This Configuration

Using the CAREU U1 Lite+ with Plaspy provides a straightforward way to bring the tracker into a single platform for location visibility, event monitoring, and operational oversight. The U1 Lite+ capabilities for cellular data, WiFi, and accessory integration make it versatile for fleet and asset monitoring, while Plaspy handles incoming device data using a consistent server endpoint and port.

To learn more about Plaspy and supported configurations visit https://www.plaspy.com. Manufacturer details and device specific configuration methods can change over time, so please verify the latest device documentation and firmware guidance at the CAREU manufacturer site https://www.systech-iot.com/ before deploying.
