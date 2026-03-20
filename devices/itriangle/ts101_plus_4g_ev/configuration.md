---
slug: /itriangle/ts101_plus_4g_ev/configuration
id: ts101_plus_4g_ev-configuration
sidebar_label: Configuration
title: iTriangle - TS101 PLUS 4G EV Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the iTriangle TS101 PLUS 4G EV to Plaspy using shared server settings and practical setup steps
keywords:
  - iTriangle TS101 PLUS 4G EV configuration
  - TS101 PLUS 4G EV Plaspy
  - iTriangle tracker setup
  - EV fleet GPS configuration
  - TS101 PLUS 4G EV setup guide
  - vehicle telematics configuration
  - Plaspy tracker configuration
  - CAN bus GPS tracker setup
  - LTE Cat1 EV tracker setup
  - GPS tracker configuration guide
---

# iTriangle - TS101 PLUS 4G EV Configuration

This page covers the public configuration context for using the iTriangle TS101 PLUS 4G EV with Plaspy. It collects the practical server settings and high level setup guidance you will need to point the tracker at Plaspy for real time tracking and telemetry ingestion. The guidance below focuses on the public Plaspy connection values and the typical steps used when preparing this EV focused telematics unit for fleet deployment.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware revision, hardware revision, installation type, and vendor tools. The TS101 PLUS 4G EV supports configuration via USB, SMS, TCP/IP, and BLE according to public device information, so use the method provided by your installer tool or iTriangle documentation for device-specific commands and menus.

## Configuration Overview

This configuration process prepares the TS101 PLUS 4G EV to communicate consistently with Plaspy for location, CAN bus telemetry, and event reporting. The objective is to ensure the device sends its data to Plaspy's shared endpoint using the correct transport and port so the platform can ingest and present device activity.

- Point the tracker to the Plaspy server endpoint so telemetry is delivered to your Plaspy account.
- Configure the transport protocol and port so the device opens sessions to Plaspy correctly.
- Validate cellular connectivity and APN settings where required so the embedded eSIM or network fallback can transmit data.
- Verify the device reports GNSS, motion events, and CAN bus data to Plaspy so dashboards and alerts populate.
- Save and apply configuration, then confirm the device appears in Plaspy and reports expected telemetry.

## Plaspy Server Settings

When configuring the TS101 PLUS 4G EV for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration choice
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and performs automatic protocol detection to recognize the tracker protocol used by the device.

## Typical Requirements Before Setup

- A powered TS101 PLUS 4G EV with access to its configuration interface (USB, SMS, TCP/IP, or BLE depending on the firmware and tools).
- Cellular connectivity enabled via the embedded eSIM or local network coverage and any required APN credentials.
- Knowledge of the manufacturer configuration method or software supplied by iTriangle for your firmware revision.
- Access to a Plaspy account or platform instance to verify incoming device data and confirm the device is visible after setup.
- Basic installer tools such as a USB cable or Bluetooth capable device if using BLE configuration.
- Device firmware version noted so you can consult the correct iTriangle documentation for command syntax or GUI differences.

## How This Tracker Connects to Plaspy

The TS101 PLUS 4G EV is configured to report location, motion events, and vehicle telemetry to the Plaspy platform by sending its data to the shared Plaspy server endpoint and port. Once pointed at Plaspy, the server IP or domain and port direct incoming sessions into the Plaspy ingestion pipeline where protocol detection maps the device to the correct parser.

- The device sends GNSS positions and timestamps to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport is established over UDP or TCP depending on the device configuration option you select.
- Plaspy automatically detects the tracker protocol and routes the incoming data for parsing and display.
- CAN bus and sensor data collected by the unit are forwarded alongside GNSS updates so diagnostics and event alerts become visible in Plaspy.
- Event reporting such as harsh events, tamper, ignition, and panic are sent to the same Plaspy endpoint for alerting and rules processing.

## Common Configuration Workflow

1. Access the official iTriangle configuration method or software for your TS101 PLUS 4G EV model and firmware (USB tool, BLE configurator, SMS commands, or TCP/IP configuration).
2. In the device server settings, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the device port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the device configuration requires selecting a transport protocol.
5. Enter or confirm any required APN or cellular parameters if your deployment requires explicit APN credentials.
6. Apply or save the configuration and perform any device restart or reboot required by the manufacturer.
7. Validate that the device reports to Plaspy by checking your Plaspy account for incoming telemetry and by verifying the device appears online.

These steps emphasize the public Plaspy settings d.plaspy.com, 54.85.159.138, and port 8888 and the need to choose UDP or TCP where applicable. Plaspy will automatically detect the tracker protocol once the device establishes a session.

## Example Configuration Commands

The TS101 PLUS 4G EV supports multiple configuration methods and the exact command syntax or GUI steps depend on the firmware and the iTriangle configuration tool used. Because manufacturer tools and SMS command sets vary by firmware revision, exact public commands are not provided here. Use the iTriangle configuration utility or the SMS/TCP command list from iTriangle documentation to set:

- server domain to d.plaspy.com or server IP 54.85.159.138
- port to 8888
- transport to UDP or TCP as required

If you have a command list supplied by iTriangle for your firmware, apply those commands in the order recommended by vendor documentation, then save and restart the device if required. Plaspy will detect the tracker protocol automatically once the device connects to the configured endpoint.

## Configuration Notes

- Firmware differences can change command syntax, available menus, or transport options. Always match commands to the device firmware version.
- Installer practice varies by region and vendor; some installations use USB configuration tools while others rely on SMS or BLE methods.
- Choosing UDP versus TCP may affect delivery and reconnection behavior; select the transport recommended by iTriangle for your deployment scenario and test connectivity.
- Plaspy uses the same port for all supported devices and performs automatic protocol detection, so focus on entering the correct server domain or IP and the correct port.
- For SMS based configuration, confirm the SMS commands and required format with iTriangle documentation before sending changes.

## Why Use Plaspy with This Configuration

Connecting the iTriangle TS101 PLUS 4G EV to Plaspy provides fleet operators and service teams with continuous visibility into EV location, vehicle state, and event-driven telemetry. With multi GNSS positioning, CAN bus telemetry, and built in motion sensors, the device can supply the high resolution data Plaspy needs for real time tracking, alerting, and analytics that support operations, safety, and maintenance planning.

To learn more about Plaspy and how the platform ingests telematics data, visit https://www.plaspy.com. Please verify the latest device specific configuration commands, firmware behavior, and installation instructions on the iTriangle website https://www.itriangle.net/ since manufacturer specifications and setup methods can change over time.
