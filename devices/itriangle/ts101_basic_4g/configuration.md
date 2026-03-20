---
slug: /itriangle/ts101_basic_4g/configuration
id: ts101_basic_4g-configuration
sidebar_label: Configuration
title: iTriangle - TS101 Basic 4G Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure iTriangle TS101 Basic 4G for Plaspy with server settings setup workflow and practical integration notes
keywords:
  - iTriangle TS101 Basic 4G configuration
  - iTriangle TS101 setup Plaspy
  - TS101 Basic 4G server configuration
  - TS101 Basic 4G GPS tracker configuration
  - iTriangle tracker Plaspy integration
  - TS101 fleet tracking setup
  - TS101 telemetry configuration
  - iTriangle GPS platform setup
  - TS101 vehicle tracking configuration
  - TS101 installation guide
---

# iTriangle - TS101 Basic 4G Configuration

This page covers the public configuration context for using the iTriangle TS101 Basic 4G tracker with the Plaspy platform. It focuses on the practical server and workflow information needed to point the TS101 Basic 4G at Plaspy, validate connectivity, and bring device telemetry into your Plaspy account. Content here is intended for technicians and integrators preparing devices for fleet and asset monitoring on Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol to simplify integration. Exact manufacturer side setup steps for the TS101 Basic 4G can vary by firmware version, hardware revision, installation type, and vendor tools such as USB utilities, SMS commands, or BLE provisioning. Use this page for public configuration guidance and consult the manufacturer for device specific steps.

## Configuration Overview

Configuring the TS101 Basic 4G for Plaspy prepares the device to transmit GNSS position fixes, event data, and telemetry to the Plaspy endpoint so vehicles and assets appear in the platform in real time. The process centers on setting the device network endpoint to the Plaspy server, choosing the transport type the device supports, and verifying successful reporting.

- Point the tracker to the Plaspy server endpoint to enable data forwarding.
- Ensure the device has a working LTE Cat 1 data connection and correct APN settings where required.
- Choose UDP or TCP transport if the device requires transport selection and set the shared Plaspy port.
- Save changes and, when applicable, reboot the tracker to apply the new server configuration.
- Confirm the device appears and reports correctly in Plaspy after configuration.

## Plaspy Server Settings

When configuring the TS101 Basic 4G for Plaspy, use the following public Plaspy server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP can be used on port 8888 depending on device preference
- Plaspy automatically detects the tracker protocol so a single shared port is used for all Plaspy devices

These values are the public Plaspy endpoint details that the TS101 Basic 4G must be configured to report to.

## Typical Requirements Before Setup

- A powered and functional TS101 Basic 4G device with the appropriate SIM and active data plan for LTE Cat 1 connectivity.
- Access to the official iTriangle configuration method or software such as the vendor USB tool, BLE provisioning app, or SMS command set.
- Knowledge of the device APN settings provided by the cellular operator if a data APN is required.
- A Plaspy account or provisioning workflow where the device IMEI or identifier can be associated once reporting begins.
- Latest firmware where possible and documentation for the specific hardware revision being configured.

## How This Tracker Connects to Plaspy

The TS101 Basic 4G sends GNSS positions and telemetry over LTE Cat 1 to the centralized Plaspy server endpoint and port. Once configured to point at Plaspy, the device becomes visible in the platform and reports location, telemetry, and events for fleet monitoring and alerts.

- The device is configured to report to the shared Plaspy endpoint d.plaspy.com or the equivalent IP 54.85.159.138.
- All devices use port 8888 on the Plaspy server for data ingestion.
- Transport can be UDP or TCP on port 8888 depending on the TS101 Basic 4G configuration options.
- Plaspy automatically detects the tracker protocol and parses incoming data so the device is recognized without per device protocol mapping.
- Reports include GNSS fixes and device events which Plaspy displays for operational monitoring and alerts.

## Common Configuration Workflow

1. Access the official iTriangle configuration method or software for the TS101 Basic 4G (USB tool, BLE provisioning, or SMS command set).
2. Enter the Plaspy server endpoint either as the domain d.plaspy.com or as the server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 as the device port for reporting.
4. Choose UDP or TCP transport if the device requires selecting a transport protocol.
5. Configure APN and any required network credentials if the device needs a data APN to connect to the LTE network.
6. Apply or save the configuration using the manufacturer tool and follow any prompts to commit changes.
7. Restart the device if the configuration method or firmware requires a reboot to apply settings.
8. Validate the device appears and reports in Plaspy and confirm telemetry is visible on the platform.

## Example Configuration Commands

The TS101 Basic 4G supports multiple configuration channels and the exact commands or steps depend on the iTriangle configuration tool, firmware, and chosen provision method. Because manufacturer utilities and SMS command sets vary by firmware revision and regional variant, the precise command syntax is provided by iTriangle documentation. Typical configuration channels include USB configuration tools, BLE provisioning apps, and SMS commands or TCP configuration payloads.

If you are using SMS commands or a manufacturer command line utility, consult iTriangle official documentation for the exact syntax. Placeholders such as APN values may be shown in manufacturer guides as [apn] [apnu] or [apnp] and should be replaced with your cellular provider values.

## Configuration Notes

- Firmware differences can change available configuration channels and command syntax so confirm the TS101 Basic 4G firmware version before applying instructions.
- Choose UDP or TCP based on your deployment needs and any transport reliability considerations; Plaspy supports both on port 8888.
- If using SMS or BLE provisioning, ensure you have the correct command set or provisioning app for your device build.
- Keep APN and cellular credentials ready when configuring an LTE Cat 1 tracker to ensure it can reach d.plaspy.com or 54.85.159.138.
- After configuration, validate device reporting in Plaspy and review device logs in the manufacturer tool if reporting does not appear.

## Why Use Plaspy with This Configuration

Using the TS101 Basic 4G with Plaspy gives fleet and asset operators centralized visibility over location, events, and telemetry streams in a single platform. The tracker’s LTE Cat 1 connectivity, multi GNSS support, integrated backup battery, and flexible provisioning channels make it a practical device for integrated fleet monitoring when pointed to the shared Plaspy endpoint.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration methods and firmware behavior on the manufacturer site https://www.itriangle.net/ to ensure your setup matches the current iTriangle guidance and firmware capabilities.
