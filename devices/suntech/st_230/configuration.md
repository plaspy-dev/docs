---
slug: /suntech/st_230/configuration
id: st_230-configuration
sidebar_label: Configuration
title: Suntech - ST 230 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Suntech ST 230 tracker showing Plaspy compatible server settings and example SMS configuration commands
keywords:
  - Suntech ST 230 configuration
  - Suntech ST 230 setup
  - ST 230 Plaspy configuration
  - Suntech GPS tracker configuration
  - ST 230 server configuration
  - Suntech ST 230 SMS setup
  - ST 230 GPRS setup
  - Plaspy tracker configuration
  - GPS tracker Plaspy compatibility
  - Suntech ST230 tracking setup
---

# Suntech - ST 230 Configuration

This page provides public configuration guidance for using the Suntech ST 230 GPS tracker with the Plaspy platform. It consolidates the shared Plaspy server settings and the practical SMS commands published for the ST 230 so you can prepare the device to communicate with Plaspy. Use this document as a configuration reference and combine it with your manufacturer materials for final installation steps.

Plaspy uses a single shared server endpoint and port for supported devices and automatically detects the tracker protocol, while manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools. The ST 230 supports GPRS with TCP or UDP transport and can be configured by SMS commands, so the examples below show how to set the APN, the Plaspy server, and a reporting interval using the public command templates.

## Configuration Overview

This configuration process prepares the ST 230 to send location and status reports to Plaspy by setting the device network parameters, server endpoint, and reporting behavior. Follow the published command templates carefully and verify the device reports into the Plaspy platform after configuration.

- Set the device network APN and optional APN credentials so the tracker can connect to mobile data service.
- Configure the device to report to the Plaspy server endpoint so telemetry is received by the platform.
- Choose the transport protocol (UDP or TCP) if required by the device and network.
- Set a reporting interval appropriate to your monitoring needs and battery life requirements.
- Validate configuration with the device verification command and confirm visibility in Plaspy.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the ST 230:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be used depending on device or network preference
- Plaspy automatically detects the tracker protocol when data arrives

Note that Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

## Typical Requirements Before Setup

- A charged ST 230 or connected power source so the device can accept configuration and register on the network.
- An active SIM card with data and SMS capability and the correct APN settings for the mobile operator.
- The device IMEI number available to derive the device ID used in SMS commands.
- An SMS capable phone or the manufacturer configuration tool to send configuration commands to the tracker.
- Access to Plaspy account or device registration information so you can confirm the device appears in the platform after setup.
- Manufacturer documentation for the ST 230 to confirm command formats and any firmware specific differences.

## How This Tracker Connects to Plaspy

When configured, the ST 230 uses the mobile data network to open a connection to Plaspy and send periodic position and status reports. The device is pointed at the shared Plaspy server endpoint and port so the platform can automatically interpret incoming messages.

- The tracker is configured with the Plaspy server domain or IP so data is routed to Plaspy.
- Reports are sent to Plaspy on port 8888 using either UDP or TCP as selected during configuration.
- Plaspy receives the device data and automatically detects the tracker protocol to parse messages.
- Once data is received, the device becomes visible in Plaspy for monitoring and event reporting.
- You can adjust reporting intervals on the tracker to balance update frequency and battery life.

## Common Configuration Workflow

1. Obtain the official Suntech configuration method or software and read the ST 230 manual for firmware specific notes.
2. Identify the device IMEI and derive the device ID (see Example Commands). Use the device ID in SMS command templates.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device configuration.
4. Set the port to 8888 in the device configuration.
5. Choose UDP or TCP if the device requires explicit transport selection.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy by using the verification command and confirming the device is visible in your Plaspy account.

If your installation uses SMS for configuration, follow the manufacturer SMS command format precisely and verify success with the device check command.

## Example Configuration Commands

The ST 230 supports SMS based configuration. The following public command templates are provided in the manufacturer content. Replace DEVICEID with the six digit device ID derived from the IMEI and fill APN placeholders as required.

How to derive the device ID
- The device ID is the six digits taken from digits 9 through 14 of the IMEI (that is, the six digits beginning at the 9th digit). For example, if the IMEI is 123456789012345 the device ID shown in the manufacturer example is 901234.

1) Set the operator APN and GPRS server
- Use 1 in the username flag if you provide an APN username or password, otherwise use 0.
- Replace [apn], [apnu], [apnp] with your operator APN, APN username, and APN password as needed.

```
SA200NTW;DEVICEID;02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

Example when no APN username or password is required (use 0 as flag):

```
SA200NTW;DEVICEID;02;0;[apn];;;54.85.159.138;8888;;;;
```

2) Set the update interval to 60 seconds
- This example sets several interval fields to 60 seconds as shown in the public template.

```
SA200RPT;DEVICEID;02;60;60;60;3;0;0;0;0;0
```

3) Check or query current settings
- Use this verification command to request preset A or current settings from the device.

```
SA200CMD;DEVICEID;02;PresetA
```

Notes on placeholders
- [apn] is the mobile network access point name for your SIM operator.
- [apnu] is the APN username when required.
- [apnp] is the APN password when required.
- DEVICEID must be the six digit ID derived from the IMEI as described above.

## Configuration Notes

- Firmware and regional variants of the ST 230 can change command behavior and available options; always confirm the command syntax with the version of the manual that matches your device firmware.
- SMS based configuration is supported as shown in the public templates, but some installations may use a manufacturer tool or USB interface instead.
- Choose UDP or TCP based on your network reliability and any guided recommendations from the operator or Suntech documentation.
- Use the device verification command after applying settings to ensure the tracker accepted the configuration.
- Remember that Plaspy uses port 8888 for all devices and will automatically detect the tracker protocol when data arrives at d.plaspy.com or 54.85.159.138.

## Why Use Plaspy with This Configuration

Configuring the Suntech ST 230 to report to Plaspy provides a straightforward way to integrate rugged asset tracking hardware into a centralized monitoring platform. With the ST 230 pointed at Plaspy, organizations gain continuous visibility into asset movement and status while relying on Plaspy to parse and display incoming tracker messages.

To learn more about Plaspy and how the platform manages device connections visit https://www.plaspy.com. Please verify the latest device specific setup details and any firmware changes on the official Suntech website at http://www.suntechint.com/ as manufacturer configuration methods and firmware behavior can change over time.
