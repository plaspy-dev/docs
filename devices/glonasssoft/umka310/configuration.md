---
slug: /glonasssoft/umka310/configuration
id: umka310-configuration
sidebar_label: Configuration
title: GLONASSsoft - UMKa310 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure GLONASSsoft UMKa310 for use with Plaspy shared server settings
keywords:
  - GLONASSsoft UMKa310 configuration
  - UMKa310 setup
  - UMKa310 Plaspy configuration
  - GLONASSsoft tracker setup
  - UMKa310 server configuration
  - UMKa310 GPS tracker setup
  - UMKa310 fleet tracking
  - Plaspy tracker configuration
  - UMKa310 telemetry configuration
  - UMKa310 Wialon Combine setup
---

# GLONASSsoft - UMKa310 Configuration

This page documents the public configuration context for using the GLONASSsoft UMKa310 tracker with Plaspy. It explains the server settings Plaspy requires and how the UMKa310 can be pointed to Plaspy for real time location, telemetry and event reporting. Use this guide to understand the practical steps and prerequisites before integrating the UMKa310 with the Plaspy platform.

Plaspy uses a shared server endpoint and a single port across supported trackers and automatically detects the tracker protocol on connection. Manufacturer side configuration steps can vary by firmware, hardware revision, installation type and the configuration method used (SMS, GPRS or Bluetooth). Always confirm device specific commands and behavior with the official GLONASSsoft documentation when necessary.

## Configuration Overview

The purpose of the configuration process is to prepare the UMKa310 to communicate reliably with Plaspy, validate connectivity, and enable visibility of the device within the Plaspy platform. Typical configuration focuses on pointing the device at the Plaspy server endpoint and ensuring the device has network access and the correct transport selected.

- Point the UMKa310 to the Plaspy server endpoint so telemetry and GNSS data are forwarded correctly.
- Configure the device to use the shared Plaspy port and select the transport mode the device supports.
- Validate connectivity and that the device appears in Plaspy after configuration.
- Optionally configure secondary servers if you need redundancy or parallel services in addition to Plaspy.
- Use the manufacturer supported configuration method (SMS, GPRS or Bluetooth) for the UMKa310 to make these changes.

## Plaspy Server Settings

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP depending on device configuration options  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

Use either the domain or IP when configuring the UMKa310; both point to the same Plaspy endpoint and the platform will accept the device connection on port 8888.

## Typical Requirements Before Setup

- A powered and functional UMKa310 unit installed or placed in a test bench configuration.  
- A valid SIM card with an active data plan and any required APN settings configured for GPRS data forwarding.  
- Access to the official GLONASSsoft configuration method you will use such as SMS commands, GPRS configuration interface or Bluetooth 4.0 tool.  
- Plaspy account access or the destination server details so you can validate that the device appears in the platform after configuration.  
- Basic tools for restart or power cycling the device if required during setup.  
- Manufacturer documentation for UMKa310 to confirm firmware specific command syntax and feature availability.

## How This Tracker Connects to Plaspy

The UMKa310 transmits GNSS coordinates, movement and telemetry data to Plaspy by forwarding its telemetry stream to the shared Plaspy endpoint and port. The device supports open protocols and can forward the same stream to multiple servers, so configuring one of its server slots to point to Plaspy is a straightforward integration step.

- The device sends GNSS navigation data and telemetry to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138 on port 8888.  
- UMKa310 supports Wialon Combine open binary protocol and can also work with EGTS style flows which Plaspy will detect.  
- The tracker can forward data to up to three servers simultaneously, allowing Plaspy to receive a copy alongside other endpoints.  
- Event reports and motion detection from the onboard accelerometer are forwarded to Plaspy for live alerts and history playback.  
- After configuration, Plaspy automatically identifies the tracker protocol so no per-device protocol selection on the server side is required.

## Common Configuration Workflow

1. Access the official GLONASSsoft configuration method you will use for the UMKa310 (SMS commands, GPRS configuration tool or Bluetooth setup tool).  
2. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 in the device server field.  
3. Set the device to use port 8888 for the primary server entry (Plaspy uses the same port for all supported devices).  
4. Choose UDP or TCP for the transport if the device requires you to select the transport protocol.  
5. Apply or save the configuration on the UMKa310 using the manufacturer tool or command set.  
6. Restart or power cycle the device if required by the device firmware to activate the new server settings.  
7. Validate that the device reports to Plaspy by checking for the device presence and recent telemetry in your Plaspy account or platform view.

If you plan to use one of the UMKa310's additional server slots, repeat the server and port steps for those slots as needed to set up redundancy or parallel data consumers.

## Example Configuration Commands

The UMKa310 supports configuration via SMS, GPRS and Bluetooth, and the exact command set or configuration file structure depends on the firmware version and the GLONASSsoft tool you use. Because these commands are manufacturer controlled and may change, this page does not list device specific SMS strings or binary configuration payloads.

Refer to the official GLONASSsoft UMKa310 configuration guide for concrete command syntax and examples when configuring via SMS or Bluetooth. Use the manufacturer documentation to obtain the exact commands needed to set the server host to d.plaspy.com or 54.85.159.138 and the port to 8888.

## Configuration Notes

- Firmware differences can change command syntax and available features; always verify commands against the UMKa310 firmware revision you have.  
- Choose TCP or UDP based on your network and reliability needs; Plaspy accepts both and detects the protocol automatically on connection.  
- If your UMKa310 is configured to forward to multiple servers, ensure one configured slot points to Plaspy at port 8888 to guarantee platform visibility.  
- SMS based configuration is useful for remote devices with no immediate local access, while Bluetooth is convenient for hands-on setup and diagnostics.  
- Confirm APN and SIM data plan settings as required by your mobile operator so the device can establish a GPRS connection to the Plaspy endpoint.

## Why Use Plaspy with This Configuration

Configuring the UMKa310 to send its telemetry to Plaspy gives fleet operators and asset managers centralized visibility into location, movement and sensor telemetry. The UMKa310's support for open protocols, batch transfer for low data consumption, and multi server forwarding make it practical to integrate into Plaspy for real time tracking, event monitoring and historical playback while keeping operating costs down.

To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For device specific command syntax, firmware details and the latest UMKa310 configuration procedures, please verify current information at the manufacturer site https://glonasssoft.ru/.
