---
slug: /istartek/vt140/configuration
id: vt140-configuration
sidebar_label: Configuration
title: iStartek - VT140 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for iStartek VT140 GPS tracker configuration and Plaspy compatibility with server settings and example SMS commands
keywords:
  - iStartek VT140 configuration
  - iStartek VT140 setup
  - VT140 server configuration
  - Plaspy compatibility
  - GPS tracker configuration
  - vehicle tracking setup
  - AIS 140 tracker setup
  - CDAC protocol configuration
  - VT140 SMS commands
  - fleet management configuration
---

# iStartek - VT140 Configuration

This page covers the public configuration context for using the iStartek VT140 GPS tracker with Plaspy. It consolidates the Plaspy server settings and practical setup steps that are commonly used to point a VT140 device at Plaspy for real time tracking and telemetry upload. Use this guide as a practical starting point for device setup and validation before completing any site specific or regulatory steps.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The VT140 supports SMS based configuration in addition to dual server IP upload, so this page includes example SMS commands as provided in the public VT140 configuration material and explains how they relate to Plaspy server values.

## Configuration Overview

The aim of this configuration is to prepare a VT140 tracker so it reliably communicates with the Plaspy platform, sends GNSS and vehicle telemetry, and appears in Plaspy maps and reports. For VT140 units the manufacturer provides SMS command based setup options including APN, server endpoint, and reporting interval, which can be used to point the device to Plaspy.

- Configure the device APN and GPRS parameters so the unit has data connectivity for upload.
- Set the VT140 server endpoint to the Plaspy server domain or IP and the shared upload port.
- Choose the appropriate transport mode if the device requires a UDP or TCP selection.
- Configure a reporting interval to control update frequency and conserve data when needed.
- Validate configuration with a status command and confirm the device appears in Plaspy.
- Preserve manufacturer defaults or perform an optional factory reset only when necessary.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Note that Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when data arrives at the server.

## Typical Requirements Before Setup

- A powered and installed VT140 unit with an active SIM configured for GPRS data.
- SMS capability to send configuration commands if using SMS based setup.
- Correct APN, APN username, and APN password information from the mobile operator.
- Access to the official iStartek configuration method or software and any vendor instructions.
- A Plaspy account or provisioning details so you can verify the device appears and reports correctly.
- Basic tools for validation such as a phone able to send SMS commands and network access to view Plaspy maps.

## How This Tracker Connects to Plaspy

The VT140 uploads GNSS positions, telemetry and event data to the Plaspy server endpoint using its dual server upload capability and supported protocols. By configuring the device to send to d.plaspy.com or the Plaspy server IP and the shared port, the VT140 becomes visible to Plaspy and will deliver location and event updates for monitoring and reporting.

- The VT140 reports multi GNSS positions and vehicle telemetry to the Plaspy server endpoint and port.
- Event and alarm notifications such as geo fence, power loss, and sensor triggers are forwarded to Plaspy.
- Buffered data stored in the device flash is uploaded when connectivity resumes so Plaspy can display continuous routes.
- The device can be configured to use either UDP or TCP transport to send packets to Plaspy on port 8888.
- Plaspy automatically detects the incoming tracker protocol so the device can use its supported protocol without extra platform configuration.

## Common Configuration Workflow

1. Access the official iStartek configuration method for the VT140, typically SMS commands or the vendor tool documented by iStartek.
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the server IP 54.85.159.138 as provided by Plaspy.
3. Set the server port to 8888, the shared port used by Plaspy for all devices.
4. Choose UDP or TCP transport on the device if a transport selection is required.
5. Set APN and other GPRS parameters so the device can establish data connectivity.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the VT140 is reporting to Plaspy by checking the device status in Plaspy and using any device side verification commands.

## Example Configuration Commands

The VT140 supports SMS based configuration. The following example commands are provided in the public VT140 configuration material. Preserve placeholders and replace them with your operator values where needed.

- Optional initial factory reset
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Explanation of APN placeholders
- {{apn}} is the mobile data APN for the SIM operator.
- {{apnu}} is the APN username if required by the carrier. If not required, the field may be left blank or omitted per carrier rules.
- {{apnp}} is the APN password if required by the carrier.

- Set the GPRS server to Plaspy using the domain and port
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server to Plaspy using the server IP and port
```text
SERVER,0,54.85.159.138,8888#
```

- Set the update interval to 60 seconds
```text
TIMER,60#
```

- Check current parameter settings
```text
PARAM#
```

Follow the command order when recommended by your installer or manufacturer. A factory reset is optional and should be used only when necessary for a clean configuration.

## Configuration Notes

- SMS based setup is explicitly supported for VT140 in the public configuration examples, but iStartek vendor tools or configuration software may also be available.
- Firmware revisions, hardware variants, and regional models can change command behavior or supported parameters. Verify commands against the device version in use.
- When a transport choice is required pick UDP or TCP based on installation guidance; Plaspy accepts either and detects the tracker protocol automatically.
- Use the server domain d.plaspy.com where possible to allow DNS resolution and flexibility; the server IP 54.85.159.138 is available as an alternate endpoint.
- Always confirm APN credentials with the mobile operator and test a short reporting interval to validate connectivity before scaling to production.

## Why Use Plaspy with This Configuration

Using the VT140 with Plaspy provides fleet operators and compliance teams with continuous location, event and telemetry visibility. The VT140's dual server upload and buffering features combined with Plaspy's automatic protocol detection and unified port simplify integration and help ensure reliable delivery of GNSS and sensor data for monitoring, reporting and safety workflows.

To learn more about Plaspy and how it integrates with devices like the VT140 visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior and manufacturer details verify the official iStartek documentation at https://istartek.com/
