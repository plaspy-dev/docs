---
slug: /sentar/d55b_a9c/configuration
id: d55b_a9c-configuration
sidebar_label: Configuration
title: Sentar - D55B-A9C Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance to connect the Sentar D55B A9C kids smartwatch to Plaspy using shared server settings and SMS commands
keywords:
  - Sentar D55B-A9C
  - Sentar configuration
  - D55B A9C setup
  - Plaspy configuration
  - GPS tracker setup
  - kids smartwatch configuration
  - Sentar Plaspy compatibility
  - device server settings
  - tracker SMS commands
  - GPS platform setup
---

# Sentar - D55B-A9C Configuration

This page documents the public configuration context for using the Sentar D55B-A9C kids smartwatch with the Plaspy platform. It focuses on the practical server settings, SMS commands included in public device guidance, and the general steps you will follow to prepare the watch to report to Plaspy. The information here is intended to help technical users and installers understand what to set on the device so it becomes visible and manageable from Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, or vendor tool. The D55B-A9C public setup includes SMS command examples and a default device password shown in manufacturer guidance; follow those commands carefully and confirm details against your device firmware and the official Sentar documentation.

## Configuration Overview

The configuration process prepares the D55B-A9C to send telemetry and status updates to Plaspy so you can monitor the device from the Plaspy dashboard. Typical configuration focuses on setting the cellular data parameters, the reporting server, and periodic upload intervals so the watch reports as expected.

- Point the device to the Plaspy server endpoint so data is routed into Plaspy.
- Configure the device APN and operator settings so cellular data and GPRS are available.
- Set the device reporting or upload interval so location and status are sent on a predictable cadence.
- Validate connectivity and confirm the device shows up in Plaspy after configuration.
- Use manufacturer-provided SMS commands or tools as documented for the D55B-A9C to apply settings.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on device selection  
- Plaspy automatically detects the tracker protocol so all devices can use the shared port and endpoint

## Typical Requirements Before Setup

- A charged and powered D55B-A9C device with cellular service enabled (the D55B-A9C supports 4G).
- An active SIM card with data enabled and SMS capability (manufacturer SMS commands are used in public guidance).
- Access to the official Sentar configuration method such as SMS commands or vendor software.
- The APN and operator details for your mobile network (APN placeholders are used in public commands).
- A handset or console capable of sending SMS commands to the device, or the supported vendor tool.

## How This Tracker Connects to Plaspy

The D55B-A9C is configured to send its telemetry and status over the cellular network to the shared Plaspy server endpoint and port. Once pointed at Plaspy, the device’s periodic uploads and event messages are ingested and displayed by Plaspy for monitoring and alerts.

- The watch sends location and status messages to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be set to UDP or TCP on the device, and Plaspy supports both.
- Periodic upload interval controls how frequently position and status are delivered (public examples show 300 second intervals).
- Plaspy automatically detects the device protocol when messages arrive on the shared port.
- Device connectivity and battery status become visible in Plaspy after successful reporting.

## Common Configuration Workflow

1. Access the official Sentar configuration method for the D55B-A9C (SMS commands or vendor tool) and confirm the device default password if required.  
2. Enter the Plaspy server as d.plaspy.com or the server IP 54.85.159.138 in the device server settings.  
3. Set the server port to 8888 as all Plaspy devices use the same port.  
4. Choose transport (UDP or TCP) on the device if the configuration requires a transport selection.  
5. Configure the APN and operator parameters for the SIM so the device has data connectivity.  
6. Apply or save the configuration and restart the device if required by the manufacturer.  
7. Validate that the device reports to Plaspy and is visible in the Plaspy dashboard or by using the device verification command.

## Example Configuration Commands

The following commands are taken from public Sentar configuration guidance for the D55B-A9C. The example commands are SMS commands and use the default device password 123456 as shown in the manufacturer sample. Commands are presented in the original public order. If your device firmware expects a slightly different syntax, follow the manufacturer documentation or vendor tool.

- Factory reset (optional initial step)
```
pw,123456,factory#
```

- Set the time zone to UTC+0
```
pw,123456,lz,0,0#
```

- Check the MCC and MNC (IMSI)
```
pw,123456,imsi#
```

- Set the operator APN where {{apn}} is the APN name, {{apnu}} is the APN username, and {{apnp}} is the APN password; xxxyy represents MCC and MNC combined in the public example
```
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```
(Explanation: replace {{apn}}, {{apnu}}, and {{apnp}} with the operator values supplied by your mobile carrier.)

- Set the GPRS server to the Plaspy server IP and port as shown in public guidance
```
pw,123456.ip,54.85.159.138,8888#
```

- Set update interval to 300 seconds (public example)
```
pw123456,upload,300#
```

- Check device settings (status)
```
pw,123456,ts#
```

Note: Commands above are provided from the device public guidance. Keep the password value and command syntax consistent with the manufacturer instructions for your firmware version. Placeholders are shown as provided; populate them with your carrier and deployment values.

## Configuration Notes

- Public SMS setup is included in Sentar guidance for this model; confirm whether your device supports SMS-only configuration or if a vendor tool is preferred for your firmware build.
- Firmware and hardware revisions may change command syntax or available features; always verify commands against your device documentation or firmware release notes.
- Choose UDP or TCP based on your local network conditions and any vendor recommendations; Plaspy supports both and will detect the protocol automatically.
- The public commands use a default password 123456 in manufacturer examples; consider updating device credentials where supported and permitted by the device workflow.
- If a reboot is required after saving settings, perform it to ensure the device registers the new server and APN settings.

## Why Use Plaspy with This Configuration

Using Plaspy with the Sentar D55B-A9C provides centralized visibility for devices that need continuous monitoring, status reporting, and alerting. Pointing the watch to Plaspy’s shared server endpoint allows families and administrators to see connectivity, battery, and reported locations from a single interface and to configure platform-level alerts and reporting.

To learn more about Plaspy and how it can manage devices like the D55B-A9C, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and official command syntax always verify the manufacturer documentation at http://www.sentarsmart.com/ as vendor details and firmware can change over time.
