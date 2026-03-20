---
slug: /orion/bd_2012/configuration
id: bd_2012-configuration
sidebar_label: Configuration
title: Orion - BD-2012 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance to connect the Orion BD 2012 tracker to Plaspy using shared server settings and practical setup steps
keywords:
  - Orion BD 2012 configuration
  - Orion BD 2012 setup
  - Orion GPS tracker configuration
  - BD 2012 Plaspy setup
  - Plaspy tracker configuration
  - Orion device configuration
  - vehicle tracking setup
  - asset tracker configuration
  - GPS platform setup
  - Orion BD2012 manual
---

# Orion - BD-2012 Configuration

This page covers the public configuration context for using the Orion BD-2012 GPS tracker with Plaspy. It focuses on the practical, public-facing values and workflow required to point the tracker to Plaspy so the device can report location and event data to the platform. Use this guide together with the official Orion documentation for device specific details and firmware behaviors.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The instructions below center on the Plaspy endpoint and port that are common to all tracked devices and outline the common steps you will typically follow to configure the BD-2012.

## Configuration Overview

Preparing the BD-2012 for integration with Plaspy is primarily about configuring the tracker to send its location and status to the Plaspy server endpoint and validating that the reports arrive correctly. The goal is reliable real time visibility in Plaspy and successful event reporting from the device.

- Configure the tracker to report to the Plaspy server domain or IP and to use the Plaspy port
- Choose the transport mode supported by the device, UDP or TCP, and save that selection
- Apply and persist the settings in device firmware or vendor software so reports are sent automatically
- Validate connectivity and that location updates appear within Plaspy
- Confirm any firmware or regional settings on the BD-2012 that affect networking or reporting intervals

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the BD-2012. These values are public and are used by Plaspy to receive device reports.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be selected on the device as required
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Access to the BD-2012 and its official configuration method such as the manufacturer software, web interface, or SMS commands if provided by Orion
- Reliable power to the device during configuration and testing
- A current firmware version or notes about firmware if available from the manufacturer
- Network connectivity as required by the device so it can reach d.plaspy.com or 54.85.159.138 on port 8888
- Credentials or permissions needed to change device settings using the provided configuration tool
- A Plaspy account or device provisioning details prepared to associate the tracker with your Plaspy environment

## How This Tracker Connects to Plaspy

When configured for Plaspy, the BD-2012 will send location and event messages to the shared Plaspy endpoint on the designated port so the platform can display and log the device activity. Plaspy’s backend will accept data from the tracker and map it to the appropriate device record.

- The tracker is configured to send reports to d.plaspy.com or 54.85.159.138
- All device reports are sent to port 8888 on the Plaspy server
- Select UDP or TCP on the tracker if the firmware requires choosing a transport protocol
- Plaspy will automatically detect the tracker protocol and parse incoming messages
- Successful reports result in visible location updates and event logs inside Plaspy

## Common Configuration Workflow

Follow these steps in practical terms when preparing an Orion BD-2012 for use with Plaspy. Exact menu names and commands vary by manufacturer tool and firmware.

1. Access the official Orion configuration method or software supplied with the BD-2012
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 into the device server field
3. Set the device port to 8888; all devices in Plaspy use the same port
4. If the device requires a transport choice, select UDP or TCP according to installer preference or device capability
5. Apply or save the configuration within the device software or via the device command interface
6. Restart the BD-2012 if the manufacturer instructions require a reboot for settings to take effect
7. Validate that the device reports to Plaspy by checking for location updates and event messages in the Plaspy platform

## Example Configuration Commands

The exact commands and syntax to configure the BD-2012 depend on the Orion configuration tool, SMS command set, or firmware interface. Manufacturer tools sometimes provide GUI fields or SMS/serial commands to set server, IP, port, and transport. Because specific command formats are not included here, follow the Orion user guide for the BD-2012 to locate the proper commands.

When using Orion tools, enter the Plaspy server values exactly as shown:
- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

Consult the Orion manual for the correct command syntax or GUI fields to apply these values. If your device supports SMS-based configuration and the manufacturer publishes SMS commands, the same server values are used within those messages.

## Configuration Notes

- Firmware variations can change menu layouts and the exact command syntax for the BD-2012; always confirm with the Orion documentation
- Choose UDP or TCP depending on installer preference and device support; Plaspy will accept reports sent via either transport
- Because Plaspy automatically detects the tracker protocol, simply pointing the device to the Plaspy server and port is usually sufficient for protocol negotiation
- Test after configuration to confirm that location updates and events appear in Plaspy and troubleshoot any network or operator restrictions if reports do not arrive
- Keep a record of device identifiers and the associated Plaspy device record to simplify troubleshooting and support

## Why Use Plaspy with This Configuration

Using the Orion BD-2012 with Plaspy provides a straightforward path to receive real time location and event data in a single platform. For organizations that need asset visibility, fleet monitoring, or alerting from devices like the BD-2012, configuring the tracker to report to Plaspy centralizes tracking and simplifies operational oversight.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the most current device specific configuration details, firmware notes, and command references verify information on the official manufacturer site http://www.oriontech.com.tw/ since manufacturer setup methods and firmware behavior can change over time.
