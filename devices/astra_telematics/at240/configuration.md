---
slug: /astra_telematics/at240/configuration
id: at240-configuration
sidebar_label: Configuration
title: Astra Telematics - AT240 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Astra Telematics AT240 to report to Plaspy using public server settings and SMS configuration commands
keywords:
  - Astra Telematics AT240 configuration
  - AT240 Plaspy setup
  - AT240 server configuration
  - Astra Telematics GPS tracker setup
  - AT240 SMS configuration commands
  - Plaspy server settings
  - vehicle tracking AT240
  - fleet tracking AT240
  - AT240 GPRS configuration
  - tracker to Plaspy integration
---

# Astra Telematics - AT240 Configuration

This page describes the public configuration context for using the Astra Telematics AT240 with the Plaspy platform. It focuses on the shared Plaspy server settings and the practical setup steps commonly used to point an AT240 tracker to Plaspy for telemetry and location reporting. Where public manufacturer commands are available they are shown as examples to assist the configuration process.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps for the AT240 can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the commands and workflow here as practical public guidance rather than a replacement for official Astra Telematics documentation.

## Configuration Overview

This configuration prepares the AT240 to send location and event data to Plaspy by setting the device network parameters and server endpoint. The goal is to make the device visible in the Plaspy platform and ensure reliable GPRS connectivity using the operator APN and the Plaspy server endpoint.

- Configure APN credentials required for the device to establish GPRS data.
- Set the Plaspy server endpoint so the tracker forwards telemetry to Plaspy.
- Choose the transport protocol (UDP or TCP) if the device requires it.
- Apply and save settings, then restart or reboot the tracker if required.
- Validate connectivity by confirming the device appears in Plaspy and reporting data.

## Plaspy Server Settings

Use the following public Plaspy parameters when configuring the AT240:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

All devices in Plaspy use the same port and the platform will detect the protocol used by the tracker automatically.

## Typical Requirements Before Setup

- A powered and functioning AT240 with access to the device by SMS or the official Astra Telematics configuration tool.
- An active SIM card with a valid data plan and the correct operator APN settings.
- Ability to send SMS commands to the device if using SMS provisioning.
- Manufacturer documentation or installer access to confirm firmware specific commands and behavior.
- A Plaspy account and knowledge of how devices are added to your Plaspy workspace for visibility validation.
- Basic understanding of choosing UDP or TCP depending on installer preference or device guidance.

## How This Tracker Connects to Plaspy

The AT240 is configured to report position and device data to the shared Plaspy server endpoint and port. Once APN and server parameters are set, the device uses GPRS to open a connection to Plaspy and transmit telemetry so the unit becomes visible in the Plaspy platform.

- The tracker uses the configured APN to get GPRS data connectivity.
- It is pointed to the Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138.
- The device sends data to port 8888 on Plaspy using the selected transport UDP or TCP.
- Plaspy automatically detects the device protocol and parses the telemetry for display.
- Successful reporting enables live tracking and event reporting inside Plaspy.

## Common Configuration Workflow

1. Access the official Astra Telematics configuration method for the AT240, either via SMS commands or the vendor tool recommended by the manufacturer.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the IP address 54.85.159.138 as required by the configuration method.
3. Set the server port to 8888 in the device configuration.
4. Choose the transport protocol UDP or TCP if the device requires an explicit selection.
5. Configure the operator APN and any optional APN username or password required for GPRS data.
6. Apply or save the configuration and restart the device if the device firmware requires a reboot to apply changes.
7. Validate that the AT240 reports to Plaspy by checking device status and incoming telemetry in your Plaspy account.

## Example Configuration Commands

The AT240 supports SMS based configuration. Below are the public SMS commands provided in manufacturer guidance. Preserve the placeholders where shown.

- Set the operator APN. Replace [apn] with your operator APN string.
```
$APAD,[apn]
```

- Optionally set the APN username. Replace [apnu] with the APN username if required by your operator.
```
$APUN,[apnu]
```

- Optionally set the APN password. Replace [apnp] with the APN password if required.
```
$APPW,[apnp]
```

- Set the GPRS server to the Plaspy server IP. You may also use the domain d.plaspy.com in vendor tools if supported, but the public SMS command example uses the Plaspy IP.
```
$IPAD,54.85.159.138
```

- Set the server port to 8888 for Plaspy.
```
$PORT,8888
```

Notes on the commands above:
- Send these SMS commands to the device number from an authorized phone as per Astra Telematics instructions.
- The APN username and password commands are optional and only needed if your mobile operator requires them.
- The order shown is the recommended order to ensure network parameters are set before pointing the device to Plaspy.

## Configuration Notes

- Firmware differences can change the exact SMS syntax or available commands; always confirm with Astra Telematics documentation for your firmware revision.
- Some vendor tools accept the domain d.plaspy.com directly; SMS commands commonly use the numeric server IP 54.85.159.138 as shown above.
- Choose UDP or TCP based on installation guidance; Plaspy accepts both and automatically detects the protocol.
- SMS based provisioning is supported by the public commands shown, but some installers prefer the vendor configuration software for bulk or remote provisioning.
- Keep a record of the APN placeholders [apn], [apnu], and [apnp] and replace them with the operator specific values for each SIM.

## Why Use Plaspy with This Configuration

Using the AT240 with Plaspy provides a straightforward path to fleet visibility and device monitoring by leveraging the shared Plaspy server endpoint and automatic protocol detection. Once the device is pointed to Plaspy and the APN is configured, organizations can rely on the platform for location reporting, event visibility, and operational oversight across multiple devices using the same server settings.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation guidance consult the official Astra Telematics documentation at https://astratelematics.com/ as manufacturer specifications and setup methods may change over time.
