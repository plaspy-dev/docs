---
slug: /suntech/st_340lc/configuration
id: st_340lc-configuration
sidebar_label: Configuration
title: Suntech - ST 340LC Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Suntech ST 340LC showing how to configure the device to report to Plaspy with server and SMS command examples
keywords:
  - Suntech ST 340LC configuration
  - ST 340LC setup
  - Suntech GPS tracker configuration
  - Plaspy device configuration
  - ST 340LC server setup
  - GPS tracker setup guide
  - vehicle tracking configuration
  - motorcycle tracker setup
  - GPRS tracker configuration
  - ST 340LC SMS commands
---

# Suntech - ST 340LC Configuration

This page covers the public configuration context for using the Suntech ST 340LC tracker with Plaspy. It brings together the Plaspy server settings you will use and the publicly available device commands and steps that are commonly used to point the tracker at the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. When manufacturer-provided commands are available they are included here; always cross-check with the device documentation or installer tools for firmware-specific behavior.

## Configuration Overview

The objective of this configuration is to prepare the ST 340LC to communicate reliably with the Plaspy platform so device location and status are visible in Plaspy. For this model the publicly available setup uses SMS commands to program the device ID, APN and GPRS server settings, and reporting interval.

- Configure the tracker to report to the Plaspy server endpoint and port so data flows into the platform.
- Program the APN and GPRS server information so the device can establish mobile data connectivity.
- Set a reporting interval appropriate for your operational needs to control update frequency and battery impact.
- Optionally perform a factory reset or verification command to ensure settings took effect.
- Validate in Plaspy that the device appears online and is reporting location and events.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged and installed ST 340LC device that is accessible for SMS programming or the manufacturer tool
- An active SIM card provisioned for mobile data and with the correct APN for the mobile operator
- Ability to send SMS to the device for SMS based configuration if that is the chosen method
- The device IMEI so you can derive the nine digit Plaspy device ID as required by the commands
- Access to the official Suntech configuration guide or installer tool when available to confirm firmware specific command syntax

## How This Tracker Connects to Plaspy

The ST 340LC is configured to report its location and operational data to the shared Plaspy server endpoint and port. Plaspy receives the incoming device messages and maps them to the device record so you can monitor location and status in the platform.

- The device sends data to d.plaspy.com or 54.85.159.138 using port 8888
- You may choose UDP or TCP transport if the device requires a transport selection
- Plaspy automatically detects the tracker protocol and processes the incoming messages accordingly
- Regular reporting intervals ensure the device appears in the Plaspy platform for real time visibility
- Verification commands can be sent to confirm device configuration before checking visibility in Plaspy

## Common Configuration Workflow

1. Access the official Suntech configuration method or software or use SMS commands as provided by Suntech documentation.
2. Enter the Plaspy server address either as the domain name d.plaspy.com or the server IP 54.85.159.138 in the GPRS/server settings.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Enter the APN, and if required the APN username and password placeholders [apn], [apnu], [apnp].
6. Apply or save the configuration and restart the device if the device or firmware requires a reboot.
7. Validate that the device reports to Plaspy by checking device online status and recent position updates in the Plaspy platform.

## Example Configuration Commands

The ST 340LC public configuration information includes SMS command syntax commonly used to program the device. The device expects a device ID value calculated from the IMEI. The device ID is the nine digit sequence obtained by taking the IMEI, excluding the final IMEI digit, and using the last nine digits of the remaining sequence.

Example device ID extraction
- If the IMEI is shown as 12345 678901234 5 then the device ID is 678901234.

Use the following commands by SMS to the device number. Replace DEVICE_ID with the nine digit device ID described above. Preserve placeholders [apn], [apnu], and [apnp] when you substitute your operator values.

1) Reset factory settings (optional initial step)
- This command is commonly used to reset device configuration before provisioning. Use only if a reset is required.
```
ST300CMD;DEVICE_ID;02;Reset
```

2) Set operator APN and GPRS server
- The next field after DEVICE_ID contains a flag indicating whether APN username or password are provided (set 1 if you supply [apnu] or [apnp], otherwise set 0). The server fields include the Plaspy server IP and port 54.85.159.138 and 8888.
```
ST300NTW;DEVICE_ID;02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
- If you do not provide APN username or password, change the flag to 0:
```
ST300NTW;DEVICE_ID;02;0;[apn];;;;54.85.159.138;8888;;;;
```
- Note: keep the placeholders [apn], [apnu], and [apnp] and substitute your operator values. The flag 1 or 0 indicates if username or password fields are used.

3) Set reporting interval to 60 seconds
- This command programs periodic reporting intervals used by the device.
```
ST300RPT;DEVICE_ID;02;60;60;60;3;0;0;0;0;0
```

4) Verify settings (read back)
- Use this command to request the device to report its configured preset settings.
```
ST300CMD;DEVICE_ID;02;PresetA
```

Follow the command order above where relevant: reset (optional), network/server configuration, reporting interval, then verification.

## Configuration Notes

- Firmware and hardware revisions can change command parameters and syntax; always confirm commands against the Suntech documentation for your unit.
- The device supports SMS based configuration in the examples above; installer tools or USB/serial configuration methods provided by Suntech may also be available depending on the vendor.
- Choose UDP or TCP based on installer preference and device firmware support; Plaspy supports either transport and will detect the protocol automatically.
- Keep APN credentials secure and verify the correct APN values with the mobile operator before programming the device.
- Plaspy uses the same port 8888 for all supported devices and accepts connections using the domain d.plaspy.com or the server IP 54.85.159.138.

## Why Use Plaspy with This Configuration

Using the ST 340LC configured to report to Plaspy gives organizations a straightforward path to track vehicles and assets with a cost effective, low power device. Configuring the device to send data to Plaspy's shared server endpoint and port provides consistent delivery of location and event data and allows Plaspy to automatically detect and parse the tracker protocol.

To learn more about Plaspy and how the platform handles device connectivity and fleet monitoring, visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer commands verify information with Suntech at http://www.suntechint.com/ as manufacturer specifications and setup methods can change over time.
