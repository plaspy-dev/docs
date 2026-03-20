---
slug: /suntech/st4335/configuration
id: st4335-configuration
sidebar_label: Configuration
title: Suntech - ST4335 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Suntech ST4335 to report to Plaspy with server settings and example SMS commands
keywords:
  - Suntech ST4335 configuration
  - Suntech ST4335 setup
  - ST4335 server configuration
  - ST4335 SMS configuration
  - Suntech GPS tracker Plaspy
  - ST4335 tracking software configuration
  - ST4335 GPS platform setup
  - Suntech device Plaspy integration
  - ST4335 fleet tracking setup
  - Suntech ST4335 telemetry setup
---

# Suntech - ST4335 Configuration

This page covers the public configuration context for using the Suntech ST4335 tracker with Plaspy. It collects the practical server settings, a high level workflow, and the manufacturer supplied SMS commands that are publicly available for setting the ST4335 to report to Plaspy. If you plan to integrate ST4335 devices into Plaspy, this guide focuses on preparing the device so it can send position and telemetry to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but actual manufacturer side setup steps can vary by firmware, hardware revision, installation type, or vendor configuration tools. Where the ST4335 supports SMS configuration, the manufacturer commands below are included as public examples and should be applied with awareness of the device firmware and local operator APN details.

## Configuration Overview

The configuration process prepares the ST4335 to deliver location and device status into Plaspy in a reliable way. Using the manufacturer SMS commands or equivalent configuration tool, you tell the tracker which Plaspy endpoint to contact, how often to report, and what APN credentials to use so cellular data is available.

- Assign the ST4335 a Plaspy reporting endpoint so data is routed to the platform
- Configure APN and GPRS parameters so the device can establish a data session
- Set reporting intervals and modes for the desired balance of frequency and battery life
- Verify the device reports to Plaspy and appears in your account or device list
- Use the provided verification command to confirm settings after configuration

## Plaspy Server Settings

When configuring the ST4335 for use with Plaspy, make sure the tracker is pointed to the shared Plaspy endpoint and port. Plaspy accepts device connections using either UDP or TCP on the same port for all devices, and Plaspy automatically detects the tracker protocol.

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

## Typical Requirements Before Setup

- A powered ST4335 device with a valid IMEI and SIM capable of cellular data
- Access to the official Suntech configuration method for this model such as SMS commands or the vendor configuration tool
- Correct APN information from the mobile operator including APN name and optional username and password
- A way to read the device IMEI to derive the device ID used in Suntech commands
- An installer account or management access to verify the device appears in Plaspy after setup

## How This Tracker Connects to Plaspy

The ST4335 sends its position and telemetry to Plaspy by opening a TCP or UDP data link to the shared Plaspy endpoint and port. Once configured, Plaspy receives GNSS and device I/O data for mapping, alerts, and historical logs. Plaspy uses a single listening port for all supported trackers and detects the protocol automatically so you only need to set the correct endpoint and port on the device.

- The device is configured to report to the shared Plaspy server endpoint and port
- Data is transmitted over TCP or UDP depending on tracker configuration or network conditions
- Plaspy receives position, event and I/O state updates for live maps and alerts
- Reporting intervals control how frequently Plaspy receives updates from the device
- Verification commands or status queries can confirm the tracker is pointing to Plaspy

## Common Configuration Workflow

1. Access the official Suntech configuration method for the ST4335 such as SMS configuration or the vendor tool recommended for your firmware and hardware revision.
2. Enter the Plaspy endpoint using either the domain d.plaspy.com or the IP address 54.85.159.138 in the device network configuration.
3. Set the destination port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP on the device if the tracker requires an explicit transport selection.
5. Configure the operator APN and any APN username or APN password required by the SIM.
6. Apply or save the configuration, and restart the device if the manufacturer instructions recommend a reboot.
7. Validate that the device reports to Plaspy by using the verification command or by checking that the device appears and sends updates in Plaspy.

## Example Configuration Commands

The ST4335 supports SMS based configuration commands. Below are the public example SMS commands extracted from the model configuration content. You must replace {{device_id}} and APN placeholders with values appropriate to your device and SIM.

Note on deriving the device ID
- The device ID used in Suntech SMS commands is the last 6 digits of the IMEI excluding the final check digit. For example, if the IMEI is 123456789012345, the device ID would be the six digits immediately before the last digit as shown in the manufacturer example. Confirm the correct substring for your IMEI before sending commands.

1) Set the operator APN and GPRS server
- Use 1 in the APN flag if you provide an APN username or password, otherwise use 0.
- Replace placeholders {{device_id}}, [apn], [apnu], and [apnp] before sending.

```
SA200NTW;{{device_id}};02;{{apn_flag}};[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

Explanation of placeholders
- {{device_id}}  = last 6 digits of the IMEI excluding the final digit (see note above)
- [apn]        = operator APN name
- [apnu]       = APN username if required otherwise leave blank
- [apnp]       = APN password if required otherwise leave blank
- {{apn_flag}}   = 1 if an APN username or password is provided, otherwise 0

2) Set the reporting interval to 60 seconds
- This command sets reporting parameters and intervals used by the device.

```
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

3) Verify settings or request preset configuration
- Use this verification command to check the device configuration after changes.

```
SA200CMD;{{device_id}};02;PresetA
```

Send these commands as SMS messages to the device number associated with the ST4335. Follow Suntech instructions for SMS formatting if your firmware requires a different delimiter or extension. If the device or firmware provides a configuration tool, prefer that tool for bulk deployments.

## Configuration Notes

- Firmware and hardware revisions may change the exact SMS syntax or field ordering. Always confirm the command format with the device firmware release notes.
- The ST4335 supports SMS based configuration in the examples above, but installers may use vendor software or provisioning services for large scale deployments.
- When an APN username or password is required include the APN flag value 1, otherwise use 0 as indicated in the command format.
- Choosing TCP versus UDP can affect delivery behavior under different network conditions; Plaspy accepts either transport and will automatically detect the tracker protocol once packets arrive on port 8888.
- Plaspy uses the same port for all supported devices so you only need to standardize the destination port on the tracker side.

## Why Use Plaspy with This Configuration

Using the Suntech ST4335 with Plaspy gives organizations a practical route to real time visibility, event monitoring and historical tracking for heavy duty vehicles and assets. The ST4335’s rugged hardware and configurable report modes combined with Plaspy’s single endpoint and automatic protocol detection simplify device onboarding and reduce the need for custom middleware.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the most current device specific configuration details, firmware notes and official command reference verify information with the manufacturer at http://www.suntechint.com/ since setup steps and firmware behavior can change over time.
