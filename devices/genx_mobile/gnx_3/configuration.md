---
slug: /genx_mobile/gnx_3/configuration
id: gnx_3-configuration
sidebar_label: Configuration
title: GenX Mobile - GNX-3 Configuration
sidebar_class_name: menu_item_tracker
description: Configure GenX Mobile GNX-3 for use with Plaspy using shared server settings and practical setup guidance
keywords:
  - GenX Mobile GNX-3 configuration
  - GNX-3 setup Plaspy
  - GNX-3 server configuration
  - GNX-3 tracking software configuration
  - GenX Mobile GPS tracker configuration
  - GNX-3 platform setup
  - Plaspy tracker integration
  - vehicle tracking GNX-3
  - GNX-3 installation steps
  - GNX-3 connectivity settings
---

# GenX Mobile - GNX-3 Configuration

This page documents the public configuration context for using the GenX Mobile GNX-3 tracker with the Plaspy platform. It summarizes the shared server settings Plaspy requires and provides practical, general guidance to prepare the GNX-3 for reporting to Plaspy. The content here is intended for technical users and installers who need clear, public-facing setup information while following manufacturer procedures.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer-side setup steps for the GNX-3 can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use this page to understand the Plaspy-side requirements and the typical workflow, then complete the device-specific steps with GenX Mobile tools or documentation.

## Configuration Overview

Configuring the GNX-3 for Plaspy means directing the device to report its location and event data to Plaspy's shared server endpoint and confirming connectivity so the unit appears in the Plaspy platform. The goal is to make the GNX-3 visible and reliable in Plaspy for real time tracking and operational monitoring.

- Provide the GNX-3 with the Plaspy server address and port so it can open a data connection
- Choose the transport type required by the device firmware and network conditions
- Validate connectivity from the field unit to Plaspy and check the device appears in the platform
- Confirm event reporting and basic telemetry such as position updates and accelerometer events
- Save and apply settings and perform a restart or reboot when required by the device

## Plaspy Server Settings

Configure the GNX-3 to report to the following Plaspy server settings when performing manufacturer-side configuration:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP as required by the device or network
- Plaspy automatically detects the tracker protocol when a device connects

All Plaspy devices use the same port and Plaspy handles protocol detection on the server side.

## Typical Requirements Before Setup

- Confirm the GNX-3 has stable power and any required accessories are connected
- Ensure the device has active network connectivity appropriate to the unit and region
- Have the device identifier available such as IMEI or serial number for platform registration
- Access to the official GenX Mobile configuration method or software used to change server settings
- A current copy of the GNX-3 installation or firmware guide from the manufacturer
- Physical access to the device for any required reboots or verification steps

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GNX-3 opens a connection to the shared Plaspy endpoint and sends position updates and event data so the device is visible in the Plaspy platform. Plaspy receives the incoming connection on the shared port and maps the tracker using its protocol detection to interpret the data.

- The device is pointed at d.plaspy.com or 54.85.159.138 and uses port 8888 to send data
- Transport can be selected as UDP or TCP depending on device firmware or network reliability
- Plaspy automatically detects the protocol to parse location and event messages
- Location updates and accelerometer events from the GNX-3 are forwarded into Plaspy for display and alerts
- Successful setup enables operational monitoring and historical tracking inside the Plaspy platform

## Common Configuration Workflow

1. Access the official GenX Mobile configuration method or software for the GNX-3 (manufacturer web tool, configuration app, or SMS interface depending on the device).
2. Enter the Plaspy server hostname d.plaspy.com or alternatively the server IP 54.85.159.138 in the device server field.
3. Set the device port to 8888 as required by Plaspy.
4. Choose UDP or TCP transport if the GNX-3 firmware requires a transport selection.
5. Apply or save the configuration using the manufacturer tool.
6. Restart or reboot the GNX-3 if the manufacturer instructions require a restart to apply network settings.
7. Validate that the device is reporting to Plaspy and appears in the platform with expected updates.

## Example Configuration Commands

The GNX-3 configuration method varies by firmware and the GenX Mobile tool used to change settings. Because device-side commands and interfaces differ across hardware revisions and vendor utilities, exact commands are not included here. Use the official GenX Mobile configuration tool or guide to enter the server hostname d.plaspy.com or server IP address 54.85.159.138, set port 8888, and select UDP or TCP where applicable. If you have a text or SMS command interface documented by GenX Mobile, follow those manufacturer examples to update server and port values.

## Configuration Notes

- Firmware differences and hardware revisions can change exact menu names or command syntax; always confirm against the GNX-3 firmware guide
- Plaspy uses a single shared port 8888 for all supported devices and relies on automatic protocol detection on the server
- Choose UDP for lower overhead and potential latency advantages or TCP if the device or network requires reliable delivery
- If your configuration method supports placeholders or APN settings, follow the GenX Mobile documentation for correct placeholder values
- Verify network and firewall rules allow outbound connections from the device to d.plaspy.com or 54.85.159.138 on port 8888

## Why Use Plaspy with This Configuration

Using the GNX-3 with Plaspy provides a practical way to centralize location and event reporting for vehicle fleets and mobile resources. Pointing the GNX-3 to Plaspy's shared server endpoint and confirming transport settings enables visibility into vehicle position, movement events, and accelerometer-based alerts for better operational oversight.

To learn more about Plaspy and how it supports devices like the GenX Mobile GNX-3 visit https://www.plaspy.com. For the most current GNX-3 device specific instructions, firmware notes, and configuration utilities confirm details on the manufacturer site http://www.genxmobile.com/ as device behavior and setup methods can change over time.
