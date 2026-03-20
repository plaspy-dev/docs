---
slug: /glonasssoft/umka310_with_cigarette_lighter/configuration
id: umka310_with_cigarette_lighter-configuration
sidebar_label: Configuration
title: GLONASSsoft - UMKa310 with cigarette lighter Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure GLONASSsoft UMKa310 cigarette lighter tracker for use with Plaspy including server settings and setup workflow
keywords:
  - GLONASSsoft UMKa310 configuration
  - UMKa310 Plaspy setup
  - UMKa310 server configuration
  - UMKa310 GPS tracker Plaspy
  - GLONASSsoft tracker configuration
  - UMKa310 cigarette lighter setup
  - EGTS Wialon Plaspy integration
  - vehicle tracking UMKa310
  - fleet management UMKa310
  - UMKa310 telemetry setup
---

# GLONASSsoft - UMKa310 with cigarette lighter Configuration

This page documents the public configuration context for using the GLONASSsoft UMKa310 with Plaspy. It summarizes the shared server settings Plaspy requires, explains the practical steps for preparing the device to report to Plaspy, and describes the common workflow used when applying manufacturer configuration. The content is intended as a technical reference for integrators, installers, and fleet managers using the UMKa310 as a Plaspy compatible GPS tracker.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use this guide as a practical starting point and confirm device specific controls in GLONASSsoft documentation or with the vendor tools you use for Bluetooth, SMS, or GPRS configuration.

## Configuration Overview

The configuration process prepares a UMKa310 to send GNSS and telemetry data to Plaspy reliably and with predictable transport behavior. The goal is to point the tracker at the Plaspy endpoint, choose the appropriate transport, and verify the device appears in the Plaspy backend.

- Set the device to report to Plaspy using the shared server domain or IP and the platform port.
- Select UDP or TCP transport if the device firmware asks for a transport type.
- Ensure device power and connectivity are stable for initial registration and testing.
- Validate that reported positions and telemetry appear in Plaspy after configuration.
- If desired, configure the UMKa310 to send to multiple servers for redundancy while including Plaspy as a primary or secondary endpoint.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device requirement
- Plaspy automatically detects the tracker protocol when data is received
- Plaspy uses the same port for all supported devices so port 8888 is the single port to set on the tracker

## Typical Requirements Before Setup

- Confirm the UMKa310 has a working power source using the cigarette lighter socket and that the device powers on.
- Ensure a valid SIM and cellular coverage if using GPRS based reporting, or have Bluetooth access for local configuration.
- Access to the official GLONASSsoft configuration method such as the provided Bluetooth tool, SMS command set, or vendor software.
- Credentials and an active Plaspy account ready to receive and identify the device once it reports.
- Basic familiarity with the device configuration workflow and any vendor supplied tools or SMS command formats.
- Optionally, a test vehicle or safe environment to validate live reporting without interfering with operations.

## How This Tracker Connects to Plaspy

The UMKa310 sends GNSS coordinates and telemetry using supported open protocols to a configured backend endpoint. When the device is pointed at Plaspy, it transmits position and telemetry packets to the shared Plaspy endpoint and port where Plaspy’s backend detects the protocol automatically.

- Configure the UMKa310 to report to d.plaspy.com or to the IP 54.85.159.138 and set the destination port to 8888.
- Choose UDP or TCP transport on the device if the firmware requires an explicit transport selection.
- The device can be set to send data in EGTS or Wialon Combine formats which Plaspy accepts through automatic detection.
- The UMKa310 supports simultaneous transmission to multiple servers so Plaspy can be one of several recipients for redundancy.
- After configuration the device transmits location and telemetry to Plaspy where it becomes visible in the platform for monitoring and event handling.

## Common Configuration Workflow

1. Access the official GLONASSsoft configuration method or software for the UMKa310, using the vendor Bluetooth tool, SMS commands, or desktop utility.
2. In the server settings enter either d.plaspy.com or 54.85.159.138 as the destination for reporting.
3. Set the destination port to 8888 which is the Plaspy port and the same port used for all supported devices.
4. Choose UDP or TCP transport if the device requires a transport selection during setup.
5. Apply or save the configuration on the UMKa310 using the vendor tool or command set.
6. Restart the device if the firmware requires a reboot to apply network or server changes.
7. Validate that the UMKa310 reports to Plaspy by checking device activity in Plaspy after the device establishes a connection.

## Example Configuration Commands

The UMKa310 supports configuration via vendor tools such as Bluetooth, SMS commands, or GPRS configuration utilities. Exact public SMS or command formats can vary by firmware and vendor toolset. There are no universal commands provided on this page because the manufacturer supplies the specific command syntax and tools.

When using the UMKa310 configuration tool, the practical commands or fields you will set are the server domain or IP and the port. For example, in a vendor Bluetooth or web tool you will set:
- Server host to d.plaspy.com or 54.85.159.138
- Server port to 8888
- Transport to UDP or TCP if required

Refer to GLONASSsoft configuration utilities or the product manual for exact SMS commands or menu locations. If you receive a manufacturer command list from GLONASSsoft, preserve the order of any provided commands and include optional reset steps only if the manufacturer documents them.

## Configuration Notes

- Firmware differences can change menu names, SMS command syntax, or Bluetooth app fields. Confirm firmware version before applying instructions.
- The UMKa310 supports multiple reporting servers; configure Plaspy as one of the targets while understanding how primary and secondary server priorities are handled by your firmware.
- Choose UDP for lower overhead reporting if your network and backend expect datagrams; choose TCP if guaranteed delivery semantics are preferred and supported by your toolset.
- Remote configuration may be available via SMS or GPRS depending on your setup. Local Bluetooth configuration is useful for initial setup when the device is accessible.
- Always verify that device logging and batch transfer settings are compatible with Plaspy expectations for reporting frequency and data volume.

## Why Use Plaspy with This Configuration

Using the UMKa310 with Plaspy provides a straightforward path to integrate GNSS location, telemetry, and optional sensor data into a cloud backend that auto detects common tracker protocols. The UMKa310’s support for EGTS and Wialon Combine, along with its ability to report to multiple servers, makes adding Plaspy to a device fleet practical for redundancy, monitoring, and anti theft workflows.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details review official GLONASSsoft documentation at https://glonasssoft.ru/ before final deployment.
