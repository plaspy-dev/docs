---
slug: /globalsat/gtr_388nb/configuration
id: gtr_388nb-configuration
sidebar_label: Configuration
title: GlobalSat - GTR-388NB Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for GlobalSat GTR 388NB to connect with Plaspy using shared server settings and SMS configuration commands
keywords:
  - GlobalSat GTR 388NB configuration
  - GlobalSat GTR 388NB setup
  - GTR 388NB Plaspy configuration
  - GTR 388NB server configuration
  - NB IoT GPS tracker configuration
  - Plaspy GPS tracker setup
  - vehicle tracking device configuration
  - GPS tracker SMS commands
  - Plaspy server settings
  - fleet management tracker setup
---

# GlobalSat - GTR-388NB Configuration

This page describes the public configuration context for using the GlobalSat GTR-388NB with Plaspy. It focuses on the practical steps and public settings required to point the tracker at Plaspy for live tracking, telemetry delivery, and visibility in the Plaspy platform. Where manufacturer commands are published, this page extracts and explains those commands in a readable format.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so follow the device manufacturer guidance when needed. The GTR-388NB is an NB‑IoT UDP tracker and the public configuration below includes SMS command examples and checksum guidance extracted from the manufacturer provided content.

## Configuration Overview

The configuration process prepares the GTR-388NB to communicate reliably with Plaspy, ensuring the device sends location and telemetry to the correct Plaspy server endpoint and port. The device can be configured using SMS commands as shown in the public configuration content, and Plaspy will automatically detect the tracker protocol once packets arrive on the shared port.

- Configure APN and network related values so the tracker has mobile connectivity for NB IoT
- Point the tracker to Plaspy server settings so packets reach the Plaspy endpoint
- Apply and save settings, then reboot or restart the tracker if required
- Validate that the tracker reports into Plaspy and that the platform shows live location and telemetry
- Use checksum protected SMS commands for secure command delivery when using the SMS configuration method

## Plaspy Server Settings

- Plaspy server domain d.plaspy.com
- Plaspy server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and accessible GTR-388NB installed according to manufacturer guidance
- A provisioned micro SIM and correct APN details for NB IoT connectivity where required
- The device IMEI number available for use in configuration commands
- Access to an SMS gateway or phone capable of sending configuration SMS messages if using SMS setup
- Manufacturer configuration guide or tools for reference to device specific behavior and firmware notes

## How This Tracker Connects to Plaspy

The GTR-388NB transmits NB‑IoT UDP packets to the configured server address and port where Plaspy ingests them for display and processing. Once the tracker is pointed at Plaspy, the platform converts incoming packets into live map markers, events, and telemetry reports.

- The tracker is configured to report to the shared Plaspy server endpoint and port
- Packets arrive on port 8888 where Plaspy automatically detects the tracker protocol
- Location, motion, and event data are forwarded to Plaspy for real time tracking and history playback
- Plaspy interprets telemetry and generates alerts for geofences, tamper, and emergency inputs
- Visibility in Plaspy enables fleet management workflows, trip logging, and remote monitoring

## Common Configuration Workflow

1. Access the official GlobalSat configuration method or software documented by the manufacturer for the GTR-388NB.
2. Ensure the device has a valid SIM and APN configured so it can reach the mobile network.
3. Enter the Plaspy server address either as d.plaspy.com or 54.85.159.138 depending on the device option.
4. Set the port to 8888 which Plaspy uses for all devices.
5. Choose UDP or TCP if the device requires a transport selection; the GTR-388NB commonly uses UDP for NB IoT.
6. Apply or save the configuration and send the SMS configuration command if using SMS setup.
7. Restart or reboot the device if required by the manufacturer to apply the new settings.
8. Validate that the device reports to Plaspy and confirm visibility in the platform dashboard or by checking incoming device messages.

## Example Configuration Commands

Format note provided in manufacturer content
- The manufacturer shows a format string used by Plaspy format example TSPRXAB27GHKLMnaicz*U!
- The public SMS commands below are taken from the manufacturer provided configuration content and include placeholders that you must replace.

Primary setup command
- Replace [imei] with the device IMEI
- Replace [apn] with the APN name for your mobile provider
- Replace [apnu] with the APN username if required by your operator
- Replace [apnp] with the APN password if required by your operator
- [checksum] is a two character uppercase hexadecimal checksum calculated over the command text before the asterisk as described below

GTR-388NB setup SMS command
```
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```

Reboot command (optional, use when required to apply settings)
```
GSC,[imei],3,0,LH*[checksumreeboot]!
```

Checksum calculation
- The manufacturer provided script calculates the checksum by XORing the character codes of the command string up to but not including the asterisk, then converting the result to a two digit uppercase hexadecimal string. Insert that checksum into the [checksum] or [checksumreeboot] placeholder.
- If your manufacturer tool provides automatic checksum computation, use it. Otherwise compute the checksum using the XOR and hex conversion method shown above before sending the SMS.

Server hostname note
- The commands above use the Plaspy server IP 54.85.159.138 as shown in the public content. Plaspy also publishes the server domain d.plaspy.com; use the form supported by your device firmware when configuring the server endpoint.

## Configuration Notes

- Firmware differences can change the exact SMS command format or supported parameters; always confirm commands against the device firmware notes.
- The device configuration examples above are SMS based as published; if you have access to a manufacturer configuration tool use that as an alternative.
- Choose UDP or TCP according to the device firmware and network characteristics. The GTR-388NB is commonly used over UDP for NB IoT but the Plaspy endpoint accepts both transports.
- Ensure correct APN settings for NB IoT service and verify the SIM profile supports the required NB IoT bands for your deployment.
- The checksum and IMEI inclusion are required by the published commands to ensure correct application of settings when sent by SMS.

## Why Use Plaspy with This Configuration

Using the GlobalSat GTR-388NB with Plaspy provides a straightforward path to fleet visibility and remote monitoring for light vehicles and micromobility fleets. Pointing the tracker at Plaspy using the shared server and port enables rapid ingestion of NB‑IoT UDP telemetry so you can build real time monitoring, trip logging, and alerting workflows without per device server configuration complexity.

Learn more about Plaspy and how it ingests tracker telemetry at https://www.plaspy.com. For the latest device specific configuration details, firmware behavior, and manufacturer documentation please verify information at https://www.globalsat.com.tw/ as manufacturer specifications and setup methods can change over time.
