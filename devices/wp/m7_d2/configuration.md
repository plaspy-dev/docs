---
slug: /wp/m7_d2/configuration
id: m7_d2-configuration
sidebar_label: Configuration
title: WP - M7 D2 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for WP M7 D2 tracker showing Plaspy server settings and practical integration steps
keywords:
  - WP M7 D2 configuration
  - WP M7 D2 setup
  - WP M7 D2 Plaspy
  - WP tracker configuration
  - M7 D2 GPS setup
  - vehicle tracker configuration
  - Plaspy server settings
  - GPS tracker integration
  - M7 D2 tracking setup
  - WP M7 D2 guide
---

# WP - M7 D2 Configuration

This page covers the public configuration context for using the WP M7 D2 portable tracker with the Plaspy platform. It summarizes the shared server settings Plaspy expects, describes the practical configuration goals, and explains the basic workflow needed to point a compatible M7 D2 to Plaspy for live tracking and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary depending on firmware revision, hardware revision, installation type, and vendor tools. The M7 D2 supports SMS, GPRS, UDP, and TCP reporting modes and has features such as tamper alerts, motion reporting, and a long life rechargeable battery that are relevant when configuring reporting behavior.

## Configuration Overview

The objective of configuration is to make the M7 D2 reliably communicate its location and events to Plaspy so the device appears in the platform and can be monitored. For Plaspy integration you will point the tracker to the shared Plaspy server endpoint and confirm that the device reports successfully.

- Configure the device network target so it sends data to d.plaspy.com or 54.85.159.138 on the Plaspy port
- Select the transport protocol the device requires, UDP or TCP, and save the setting
- Validate GPRS or SMS connectivity and ensure the device has power and cellular signal
- Confirm the device transmits and that Plaspy detects the protocol and shows the tracker online
- Enable any device alerts such as tamper or low battery so Plaspy receives the intended events

## Plaspy Server Settings

Use the following public server settings when configuring the M7 D2 for Plaspy integration:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol on incoming connections

Note that Plaspy uses the same port for all supported devices and performs automatic protocol detection so the platform can accept UDP or TCP device sessions on the shared port.

## Typical Requirements Before Setup

- A charged and powered WP M7 D2 with battery installed and ready
- A valid SIM card inserted if using GPRS data or SMS reporting and active cellular service
- Access to the official manufacturer configuration method such as SMS commands, a vendor web tool, or a configuration app
- A computer or phone to send configuration commands or to use the manufacturer tool
- A stable cellular signal at the installation location for initial verification
- Basic account access in Plaspy so you can verify the device appears after configuration

## How This Tracker Connects to Plaspy

When configured for Plaspy, the M7 D2 is set to send its location and event data to the shared Plaspy server endpoint and port so the platform can ingest and display the data. Plaspy then processes the incoming messages and makes the device visible in the fleet list.

- The device is pointed to d.plaspy.com or the equivalent IP 54.85.159.138
- Port 8888 is used for all device connections to Plaspy
- Transport is selected as UDP or TCP on the device if required by the device firmware
- Plaspy automatically detects the incoming tracker protocol and handles parsing
- Device events such as motion reports or tamper alerts are forwarded to Plaspy once reporting is active

## Common Configuration Workflow

Follow these practical steps when configuring the M7 D2 for Plaspy:

1. Access the official manufacturer configuration method or software for the M7 D2 (for example SMS commands, vendor app, or PC configuration tool).
2. In the device settings enter the Plaspy server target using either the server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the destination port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection; Plaspy accepts both and auto detects the protocol.
5. Apply or save the configuration on the device following manufacturer instructions.
6. Restart the device if the manufacturer or firmware requires a reboot for settings to take effect.
7. Validate that the device reports to Plaspy by checking that the tracker appears online in your Plaspy account and that initial location or event messages arrive.

## Example Configuration Commands

The exact commands and configuration method vary by manufacturer firmware and by which configuration channel is provided for the M7 D2. Some installers will use SMS based commands, others will use a configuration tool from the vendor. Because the M7 D2 supports reporting via UDP and TCP, the typical public steps are to set the server to d.plaspy.com or 54.85.159.138 and set the port to 8888, then save and restart the device as required.

If you are using SMS commands or a text configuration interface provided by the manufacturer, consult the M7 D2 manual for the exact syntax. The key values to include are the Plaspy server domain or IP and port 8888 and the chosen transport UDP or TCP. Plaspy will automatically detect the tracker protocol when the device connects.

## Configuration Notes

- Firmware matters: different M7 D2 firmware revisions or vendor firmware may use different command syntax or configuration flows.
- Transport choice: UDP is common for low overhead reporting while TCP may be used by some tools; Plaspy accepts both on the shared port and auto detects the protocol.
- Use the official manufacturer method: always apply settings using the M7 D2 configuration method recommended by the vendor to ensure changes persist.
- Verify reporting after configuration by checking device presence in Plaspy and by confirming expected event messages such as motion or tamper alerts.
- Keep battery and power state in mind when testing; long standby features can affect how quickly a device reports after configuration.

## Why Use Plaspy with This Configuration

Using the WP M7 D2 with Plaspy provides a straightforward path to communicate location and event data into a single fleet management platform. Pointing the device to the shared Plaspy endpoint ensures centralized visibility for tracking, event monitoring, and operational oversight of vehicles where the compact and long life M7 D2 is installed.

Learn more about Plaspy and how it handles device connections at https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and installation details for the WP M7 D2 always verify information with the manufacturer at http://www.wondeproud.com/ since firmware behavior and setup steps can change over time.
