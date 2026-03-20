---
slug: /gosafe/g777/configuration
id: g777-configuration
sidebar_label: Configuration
title: Gosafe - G777 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Gosafe G777 OBD II tracker for use with Plaspy using shared server settings and protocol auto detection
keywords:
  - Gosafe G777 configuration
  - Gosafe G777 setup
  - Gosafe G777 Plaspy
  - Gosafe GPS tracker configuration
  - Gosafe OBD II tracker setup
  - G777 tracking setup
  - G777 server configuration
  - vehicle tracker Plaspy configuration
  - Gosafe device integration
  - fleet tracking G777
---

# Gosafe - G777 Configuration

This page documents the public configuration context for using the Gosafe G777 OBD II GPS tracker with the Plaspy platform. It focuses on the practical server and workflow details needed to point the device to Plaspy and verify that the tracker reports successfully. This is a technical integration reference intended for installers, fleet managers, and technical evaluators.

Plaspy uses shared server settings across supported trackers and automatically detects the device protocol once the tracker reports to the platform. Exact manufacturer side configuration steps for the G777 can vary by firmware version, hardware revision, installation type, and the vendor tools used to program the unit. Always consult manufacturer documentation for device specific interfaces and the latest firmware notes.

## Configuration Overview

The purpose of configuring the G777 for Plaspy is to prepare the tracker to communicate reliably with the Plaspy server, confirm connectivity, and enable the device to appear and be managed in the Plaspy platform. This process centers on updating the device reporting endpoint and transport details, applying the configuration, and verifying that telemetry arrives at Plaspy.

- Point the G777 to the Plaspy server endpoint so location and event data reach the platform
- Use the shared Plaspy port and transport settings that apply to all supported devices
- Save and apply changes in the manufacturer configuration tool or device interface
- Validate connectivity and confirm the tracker is visible in Plaspy after reporting
- Troubleshoot transport choice and firmware differences if the device does not register

## Plaspy Server Settings

When configuring the G777 to report to Plaspy, use the following public settings exactly as provided:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and relies on automatic protocol detection to interpret incoming tracker data.

## Typical Requirements Before Setup

- Confirm the G777 is installed and receiving power from the vehicle OBD II port
- Have access to the official Gosafe configuration method or software used to program the G777
- Confirm the device is powered and in a state that allows configuration updates
- Ensure you have the tracker identification details required by your Plaspy account or inventory process
- Verify basic vehicle installation and mounting are complete so the device can obtain GPS fixes after configuration

## How This Tracker Connects to Plaspy

The G777 is configured to send its location and event reports to a Plaspy server endpoint and port where Plaspy will parse the incoming protocol and present the device in the platform. Once the device communicates with the Plaspy endpoint, Plaspy automatically detects the protocol and processes position updates and event messages.

- The tracker is pointed to d.plaspy.com or the IP 54.85.159.138 as the reporting host
- All reporting is sent to port 8888 which Plaspy uses for supported devices
- Choose UDP or TCP transport on the tracker if the device configuration requires a transport selection
- Plaspy receives the data and performs automatic protocol detection to interpret the tracker messages
- After successful reporting the device becomes visible and starts sending telemetry to Plaspy

## Common Configuration Workflow

Follow this practical workflow to configure a G777 for Plaspy integration:

1. Access the official Gosafe configuration method or software used to program the G777
2. In the device server settings enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138
3. Set the server port to 8888 as required by Plaspy
4. If the device requires selecting a transport, choose either UDP or TCP according to installer preference or device guidance
5. Apply or save the configuration within the manufacturer tool or device interface
6. Restart the device if the manufacturer instructions require a reboot to apply settings
7. Validate that the device reports to Plaspy and appears in the platform with expected telemetry

## Example Configuration Commands

The exact configuration commands and syntax for the G777 depend on Gosafe configuration tools and the device firmware. No public command set is included here. Use the official Gosafe configuration utility or the vendor supplied instructions to enter the Plaspy server host and port values d.plaspy.com or 54.85.159.138 and port 8888, and to select UDP or TCP if required by the device.

If you have a manufacturer command set or SMS configuration template, apply the same host and port values and follow the order recommended by Gosafe. Preserve any placeholders provided by the manufacturer when present and consult the official Gosafe documentation for exact command examples.

## Configuration Notes

- Firmware and hardware revisions can change the configuration user interface or command syntax; check Gosafe firmware notes when available
- Choosing UDP or TCP may affect message delivery behavior based on your network and installer preference; test both if needed
- Plaspy uses a single shared port 8888 for all devices so you only need to set the same port on the G777
- Automatic protocol detection in Plaspy reduces the need to specify protocol details on the platform side once the tracker reports
- Always keep a copy of the original device configuration in case you need to revert settings after testing

## Why Use Plaspy with This Configuration

Configuring the Gosafe G777 to report to Plaspy provides a straightforward way to centralize vehicle visibility, event reporting, and operational monitoring in a single platform. For fleet managers and vehicle owners the combination of a programmable OBD II tracker and a platform that auto detects protocols can simplify rollout and reduce per device configuration overhead.

Learn more about integrating trackers and fleet devices with Plaspy at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify the current information on the official Gosafe website https://gosafesystem.com/
