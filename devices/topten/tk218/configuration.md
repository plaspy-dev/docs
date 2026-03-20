---
slug: /topten/tk218/configuration
id: tk218-configuration
sidebar_label: Configuration
title: TopTen - TK218 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopTen TK218 showing how to configure the device to report to Plaspy with practical server settings and SMS commands
keywords:
  - TopTen TK218 configuration
  - TopTen TK218 setup
  - TK218 Plaspy configuration
  - TopTen GPS tracker TK218
  - TK218 server configuration
  - TopTen tracker setup guide
  - TK218 SMS configuration
  - GPS platform setup TK218
  - vehicle tracking TK218
  - Plaspy tracker configuration
---

# TopTen - TK218 Configuration

This page documents the public configuration context for using the TopTen TK218 with Plaspy. It summarizes the server settings you need to point the tracker to Plaspy, explains the practical SMS commands published for the TK218, and describes the typical workflow to register and validate the device in Plaspy. Use this guide together with manufacturer documentation for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TK218 supports SMS and GPRS configuration methods and works with Plaspy when its reporting endpoint and APN are set to the platform values below.

## Configuration Overview

Configuring a TK218 for Plaspy means preparing the tracker to communicate reliably with the Plaspy server, ensuring the device identity is recognized by the platform, and validating that telemetry reaches your Plaspy account. The public configuration flow for many TK218 devices is performed using SMS commands or the manufacturer configuration tool and uses a shared Plaspy endpoint and port.

- Set the device network APN and GPRS server to the Plaspy server address or IP so reports reach the platform.
- Confirm the tracker identifier derived from the IMEI so Plaspy can associate the device with received data.
- Choose UDP or TCP transport on the device if required, using Plaspy's single port approach.
- Validate connectivity by checking the tracker reports to d.plaspy.com or 54.85.159.138 on port 8888.
- Keep manufacturer firmware and parameter differences in mind and consult TopTen documentation when required.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

## Typical Requirements Before Setup

- A powered TK218 properly connected to the vehicle OBD II interface or appropriate supply.
- A working SIM card with GPRS data enabled and correct APN information.
- Access to the TopTen SMS configuration method or the official configuration tool from the manufacturer.
- Knowledge of the device IMEI so you can derive the tracker identifier used by Plaspy.
- A way to receive and send SMS to the device for SMS based configuration if the device is configured that way.
- Time to verify the device reports to the Plaspy server after configuration.

## How This Tracker Connects to Plaspy

The TK218 is configured to report to the shared Plaspy server endpoint and port so Plaspy can receive GPS and status messages from the device. Once the device is pointing at the Plaspy endpoint and the APN is correct, the platform will detect the protocol automatically and present the device in the Plaspy interface.

- The device is set to send position and event data to 54.85.159.138 or the server domain configured for Plaspy.
- All devices report to port 8888 on the Plaspy endpoint.
- Plaspy automatically detects the tracker protocol so you do not normally need to specify protocol details on the platform side.
- The tracker identifier used by Plaspy corresponds to the last 14 digits of the IMEI as reported by the device (see manufacturer PAR output).
- After configuration the device will become visible in Plaspy once it sends a valid report to the shared endpoint.

## Common Configuration Workflow

1. Access the official TopTen configuration method or software and confirm you can send SMS parameter commands or use the vendor tool.
2. Read the IMEI from the device using the manufacturer method (PAR or diagnostic output) and derive the tracker ID from the last 14 digits of the IMEI.
3. Enter the Plaspy server endpoint by configuring either the domain d.plaspy.com or the IP 54.85.159.138 on the device.
4. Set the port to 8888 on the tracker and, if required, choose the transport protocol UDP or TCP.
5. Configure the APN and any APN credentials required by the SIM using the manufacturer SMS command or tool.
6. Apply or save the configuration and restart or power cycle the device if the manufacturer instructions require it.
7. Validate that the device reports to Plaspy by checking for incoming messages and confirming the device appears in your Plaspy account.

## Example Configuration Commands

The TopTen TK218 supports SMS based configuration. The following public SMS commands are provided by the manufacturer for use with Plaspy. Preserve and replace placeholders where appropriate.

- Optional initial factory restore command. Use only if you need to reset the device to factory defaults before setting server and APN values.
```text
111111CLR
```

- Public command to set APN and GPRS server to the Plaspy IP and port. Preserve the placeholders {{apn}}, {{apnu}}, and {{apnp}} when replacing with your SIM carrier values.
```text
111111WWW:IPN:54.85.159.138;COM:8888;APN:{{apn}},{{apnu}},{{apnp}};RPT:60;SLP:60;RUN:2;
```
Explanation of placeholders
- {{apn}} is the APN name for the SIM card provider.
- {{apnu}} is the APN username when required by the operator.
- {{apnp}} is the APN password when required by the operator.

- Public verification command to query current server settings on the TK218:
```text
111111WWW:
```

Note: The WWW command example above sets the device to report to the Plaspy IP 54.85.159.138. Some firmware versions accept a domain name instead of a raw IP. Where supported you can configure d.plaspy.com instead of the IP depending on device firmware and manufacturer tool behavior. Refer to TopTen documentation for device specific command syntax.

## Configuration Notes

- SMS based configuration is supported for the TK218 and is commonly used to set APN and server parameters in the field.
- Firmware versions and hardware revisions may change the exact command syntax or parameter names. Confirm exact syntax with TopTen documentation.
- Choose UDP or TCP based on the device configuration options; Plaspy accepts both on port 8888 and detects protocol automatically.
- Use the IMEI PAR output to derive the tracker identifier for Plaspy. The identifier corresponds to the last 14 digits of the IMEI as reported by the device.
- Always verify APN credentials with your mobile operator and test connectivity after making changes.

## Why Use Plaspy with This Configuration

Pointing the TopTen TK218 to Plaspy using the shared Plaspy server endpoint and port provides a reliable way to centralize location and event data from TK218 devices. This configuration enables organizations to monitor vehicle movement, receive alarms, and view device reports in a single platform while relying on Plaspy to detect the tracker protocol automatically.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration methods and firmware behavior with the manufacturer at http://www.t10.cn. Device setup methods and firmware parameters can change over time so always cross check with official manufacturer documentation before wide deployment.
