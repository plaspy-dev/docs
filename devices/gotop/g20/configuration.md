---
slug: /gotop/g20/configuration
id: g20-configuration
sidebar_label: Configuration
title: GOTOP - G20 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configuring GOTOP G20 with Plaspy including server settings d.plaspy.com port 8888 transport options and setup workflow
keywords:
  - GOTOP G20 configuration
  - GOTOP G20 setup
  - GOTOP G20 server configuration
  - GOTOP G20 Plaspy
  - Plaspy GPS tracker configuration
  - GOTOP GPS tracker setup
  - vehicle tracking G20
  - asset tracker G20
  - GOTOP G20 installation
  - GPS platform configuration
---

# GOTOP - G20 Configuration

This page documents the public configuration context for using the GOTOP G20 tracker with the Plaspy platform. It summarizes the shared Plaspy server settings you will apply on the device or via the manufacturer configuration tool, explains required preconditions, and outlines a practical workflow to get the G20 reporting to Plaspy. This is a configuration guide intended to help technical installers and fleet administrators prepare the device for integration with Plaspy.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol so you do not need to choose a protocol-specific parser on the server side. Manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so use this guide alongside the official GOTOP documentation and your vendor configuration utility.

## Configuration Overview

The configuration process sets the G20 to report its location and status events to Plaspy so devices appear and update reliably in the platform. You will configure the device to point at the Plaspy server endpoint and confirm connectivity from the tracker to the platform.

- Point the GOTOP G20 to the Plaspy server endpoint so location packets are sent to d.plaspy.com or the Plaspy server IP.
- Set the device transport and port consistently with Plaspy settings so packets are accepted by the platform.
- Validate on-device or via the manufacturer tool that the tracker has network connectivity and an active SIM.
- Confirm the device begins reporting in Plaspy so location and alarm events become visible.
- Save and apply firmware or configuration changes, then restart the G20 if required to activate settings.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the GOTOP G20:

- Server domain name d.plaspy.com
- Server IP address 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be selected on the device if required
- Plaspy automatically detects the tracker protocol so no protocol selection is required on the server side

Note: Plaspy uses the same port for all supported devices and automatically identifies the tracker protocol when data arrives.

## Typical Requirements Before Setup

- A charged GOTOP G20 with an active micro SIM card provisioned for data and voice on networks compatible with the device 2G bands.
- Access to the official GOTOP configuration method or vendor tool (web interface, USB/serial tool, SMS commands, or mobile configuration utility depending on the supplier).
- Power source or fully charged battery appropriate for the selected G20 battery version.
- Network coverage in the installation area that supports the device 2G bands.
- A Plaspy account or platform access to validate the device appears and reports after configuration.
- Knowledge of any APN or carrier credentials required by the SIM if the manufacturer tool asks for them.

## How This Tracker Connects to Plaspy

The GOTOP G20 is configured to send its GPS and status information to the Plaspy server endpoint, using the shared Plaspy port. Plaspy receives the inbound packets and automatically detects the tracker protocol so reported data is parsed and displayed in the platform.

- The tracker is set to report to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on the device configuration options and installer preference.
- Location updates and device events are transmitted from the tracker to Plaspy where they become available in the platform.
- After initial configuration and restart, the device should begin regular reporting and any alarm or status messages supported by the G20 will be forwarded to Plaspy.
- Plaspy’s automatic protocol detection means the platform will attempt to interpret the incoming packets without requiring manual protocol selection.

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software provided by your vendor or the manufacturer.
2. In the tracker network/server settings, enter d.plaspy.com or the Plaspy server IP 54.85.159.138 as the reporting endpoint.
3. Set the server port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP as the transport if the device requires a transport selection.
5. Enter any carrier APN or SIM credentials if prompted by the configuration tool.
6. Apply or save the configuration changes in the manufacturer tool.
7. Restart the device if required by the tool or firmware to activate the new server settings.
8. Validate that the device reports to Plaspy by checking device status in your Plaspy account and confirming incoming position updates.

## Example Configuration Commands

The GOTOP G20 configuration method varies by vendor tool and firmware. Because this page covers public Plaspy settings but not a single universal command set for all device firmware, the exact configuration commands differ between manufacturers and utilities. Typical manufacturer methods include a configuration application, web interface, or SMS commands supplied by GOTOP or your device vendor.

If you have specific SMS or serial commands from the GOTOP configuration sheet, apply them following the vendor instructions and substitute the Plaspy server values where server, IP, or port placeholders appear.

Example placeholder explanation for manufacturer command strings:
- If a command includes placeholders such as [apn] or similar, replace them with the carrier APN, username, or password required by your SIM.

Because model specific commands were not provided in the public configuration input for this page, consult your GOTOP manual or vendor configuration guide for the exact command syntax to set server and port values.

## Configuration Notes

- Firmware and hardware revisions can change the exact menu labels, command syntax, or configuration tool behavior. Always confirm against the device firmware version you are working with.
- Choose UDP or TCP based on installation needs; Plaspy accepts both and will auto detect the protocol used by the device.
- The G20 requires a micro SIM and operates on 2G bands listed in the device specifications. Verify that 2G service is available in your deployment area.
- If using SMS-based setup commands provided by GOTOP, ensure command formats match the firmware version; SMS syntax may vary by model variant.
- Keep a record of the exact server endpoint, transport, and port applied to each device to simplify troubleshooting and fleet audits.

## Why Use Plaspy with This Configuration

Using the GOTOP G20 with Plaspy provides a straightforward way to centralize location and event reporting for person and asset tracking. By configuring the device to point to the shared Plaspy server endpoint and port, organizations can get consistent reporting, integrate alarms and movement events into fleet workflows, and maintain operational visibility across assets and vehicles.

To learn more about Plaspy and how it can manage devices like the GOTOP G20, visit https://www.plaspy.com. For the latest device specific setup methods, firmware notes, and manufacturer details consult the official GOTOP website https://www.gotop.cc/ as device behavior and configuration steps can change with firmware and hardware revisions.
