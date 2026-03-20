---
slug: /itriangle/ts101_basic_ev/configuration
id: ts101_basic_ev-configuration
sidebar_label: Configuration
title: iTriangle - TS101 Basic EV Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for iTriangle TS101 Basic EV to connect to Plaspy with server settings and setup workflow
keywords:
  - iTriangle TS101 Basic EV configuration
  - TS101 setup Plaspy
  - TS101 server configuration
  - TS101 GPS tracker Plaspy
  - TS101 EV tracker setup
  - iTriangle tracker configuration
  - fleet tracking TS101
  - Plaspy device setup
  - GPS tracker configuration guide
  - vehicle telematics TS101
---

# iTriangle - TS101 Basic EV Configuration

This page documents the public configuration context for using the iTriangle TS101 Basic EV with Plaspy. It focuses on the server settings and practical steps you will typically use to point the tracker at Plaspy so the device can deliver GNSS positions, accelerometer events, and IO telemetry into the platform. The guidance here is intended for technicians and installers preparing the TS101 Basic EV for integration with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. The TS101 Basic EV is a rugged, compact tracker built for EV and mixed fleet use with multi constellation GNSS, Bluetooth 3.0, 2G GSM connectivity, internal memory for event buffering, and a wide 9–90V DC input, which together enable reliable reporting to Plaspy when configured correctly.

## Configuration Overview

This configuration process prepares the TS101 Basic EV to communicate reliably with the Plaspy platform and to ensure device events and stored records are delivered to your account. The main goal is to set the tracker to the Plaspy server endpoint and verify connectivity so that location, accelerometer events, and IO status are visible inside Plaspy.

- Set the device network reporting endpoint to the Plaspy server domain or IP and the shared Plaspy port.
- Choose the transport method the device firmware supports and, if required, set UDP or TCP to use port 8888.
- Apply and save the configuration via the manufacturer tool you use, then restart the tracker if required.
- Verify live reporting and allow the device to upload any locally buffered records so Plaspy can reconcile missed intervals.
- Confirm that accelerometer and IO events are being received in Plaspy so alerts and dashboards reflect the device state.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the TS101 Basic EV:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be used on port 8888 depending on device firmware
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices, and automatic protocol detection removes the need to manually select a protocol string in many cases.

## Typical Requirements Before Setup

- A powered TS101 Basic EV with any required backup battery installed and connected to the vehicle power supply.
- A compatible cellular SIM with an active data plan if using 2G GSM reporting, and confirmation that the device has network registration.
- Access to the official iTriangle configuration method for your unit such as USB, SMS, Bluetooth, or vendor software tools.
- The Plaspy server settings noted above available to enter into the device configuration.
- A technician account or workflow to verify device reporting inside the Plaspy platform after setup.
- Basic tools to monitor device logs or to view the device response during configuration if the manufacturer tool supports validation.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the TS101 Basic EV sends GNSS position and event telemetry to the Plaspy shared server endpoint and port so that location and event data appear in the platform. The device uses its 2G GSM data connection as the transport for TCP/IP reporting, and local buffering ensures events are stored during outages and resumed when connectivity returns.

- Device reports GNSS positions and event telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- Reporting can use either UDP or TCP on port 8888 depending on firmware options; Plaspy will accept and auto detect the protocol.
- Buffered records stored in internal memory are uploaded when the network connection is reestablished.
- Accelerometer, tamper, and IO state changes are transmitted to Plaspy as events for alerts and historical reporting.
- Bluetooth or USB configuration channels remain available for local commissioning without affecting server reporting.

## Common Configuration Workflow

1. Access the official iTriangle configuration method for the TS101 Basic EV using the manufacturer software, SMS tool, USB connection, or Bluetooth commissioning tool.
2. Enter the Plaspy server as the reporting endpoint by specifying either d.plaspy.com or 54.85.159.138.
3. Set the device port to 8888 which is the shared Plaspy port for all devices.
4. Choose UDP or TCP as the transport if the firmware requires an explicit transport selection.
5. Save or apply the configuration in the manufacturer tool and push changes to the device.
6. Restart the tracker if the device or tool instructs to do so to activate the new server settings.
7. Validate that the device reports to Plaspy by checking live position updates and confirming any buffered records have been uploaded.

## Example Configuration Commands

No public device commands were provided in the model configuration for this page. Exact configuration commands and the syntax for SMS or serial configuration vary by firmware and the manufacturer configuration tool. Typical methods include:

- Using the iTriangle USB or Bluetooth configuration utility to set server and port fields.
- Sending SMS configuration commands if the firmware supports SMS setup.
- Updating settings over a serial or console interface when supported by the device.

Consult the iTriangle configuration manual for the TS101 Basic EV for exact commands and examples specific to your firmware revision.

## Configuration Notes

- Firmware differences can change the exact sequence or names of settings in manufacturer tools. Always confirm the commands are correct for your firmware build.
- Choose UDP or TCP according to the device capability and network reliability; Plaspy accepts either on port 8888 and will detect the active protocol automatically.
- SMS based setup is often available for field configuration, while USB or Bluetooth tools are useful for controlled commissioning in a workshop.
- Because Plaspy uses the same port for all devices, focus on correct server host and transport selection rather than searching for varying port numbers.
- Keep a copy of the applied configuration and log the device IMEI or serial so you can match the tracker to the correct Plaspy account entry during onboarding.

## Why Use Plaspy with This Configuration

Using the TS101 Basic EV with Plaspy provides a straightforward route to centralized fleet visibility, event monitoring, and basic telematics dashboards. The device design—wide voltage tolerance, internal buffering, and accelerometer driven events—supports reliable reporting into Plaspy for EV and mixed fleet use cases where uptime, event capture, and simple sensor telemetry are important.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the most current device specific configuration steps, firmware notes, and manufacturer commands consult the iTriangle documentation at https://www.itriangle.net/ as manufacturer specifications and setup methods can change over time.
