---
slug: /careu/ua1/configuration
id: ua1-configuration
sidebar_label: Configuration
title: CAREU - UA1 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CAREU UA1 tracker and Plaspy integration with shared server settings and practical setup steps
keywords:
  - CAREU UA1 configuration
  - CAREU UA1 setup
  - CAREU UA1 Plaspy
  - UA1 GPS tracker configuration
  - UA1 Plaspy server settings
  - GPS tracker configuration Plaspy
  - asset tracker UA1 setup
  - UA1 GPS platform setup
  - CAREU tracker Plaspy integration
  - UA1 installation guide
---

# CAREU - UA1 Configuration

This page documents the public configuration context for using the CAREU UA1 with Plaspy. It focuses on the practical, publicly available settings you will apply on the device or in the CAREU configuration tool so the UA1 can report location and telemetry into the Plaspy platform. The content here reflects the UA1 capabilities such as low power GNSS tracking, LTE Cat M1 NB1 with 2G fallback, SMS, FTP and USSD, Bluetooth commissioning, and tamper detection used in long term asset monitoring.

Plaspy uses shared server settings across supported devices and automatically detects the correct tracker protocol, but the exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the vendor configuration tool you use. Use the shared Plaspy endpoint values below when configuring the UA1, and always confirm device specific workflows with the manufacturer documentation if a step differs in your firmware or commissioning app.

## Configuration Overview

This configuration process prepares the UA1 to communicate reliably with Plaspy and to appear in your Plaspy dashboards for monitoring and alerting. The goal is to point the tracker at the Plaspy server, choose the appropriate transport, confirm the reporting interval and event behavior, and validate that reports arrive in Plaspy.

- Point the UA1 to the Plaspy server endpoint so location and telemetry are delivered reliably.
- Select the transport protocol supported by your firmware and network environment, UDP or TCP, on the shared Plaspy port.
- Verify SIM and cellular connectivity so the UA1 can use LTE Cat M1 NB1 or fallback 2G as needed.
- Configure reporting and alarm/event options such as periodic beaconing, motion alerts, and tamper notifications for Plaspy processing.
- Validate device registration and incoming messages in Plaspy to confirm onboarding.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the CAREU UA1. Plaspy uses the same port across supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol so devices can use either TCP or UDP to connect

## Typical Requirements Before Setup

- A charged or installed battery in the UA1 appropriate for your deployment and an installed SIM card with an active data plan and SMS capability.
- Access to the official CAREU configuration method or software such as the Bluetooth commissioning tool or the vendor provisioning utility.
- Knowledge of the Plaspy endpoint d.plaspy.com or the server IP 54.85.159.138 and port 8888 to enter during configuration.
- A device firmware level that supports remote reporting to custom server endpoints and the transport you plan to use, or ability to update firmware via FOTA when required.
- Temporary placement with good GNSS visibility during commissioning to obtain a location fix for validation.
- A Plaspy account or administrator who can confirm device messages are arriving and visible in the platform.

## How This Tracker Connects to Plaspy

The UA1 sends GNSS positions and telemetry to the Plaspy platform over cellular networks or supported messaging channels. When configured to report to Plaspy, the tracker uses the shared Plaspy server endpoint and port so Plaspy can receive and process location, movement and tamper events automatically.

- Device reports are sent to d.plaspy.com or 54.85.159.138 on port 8888 using either UDP or TCP.
- GNSS position fixes are included in periodic reports and in event driven messages for motion or tamper detections.
- Telemetry such as accelerometer movement and tamper events is delivered to Plaspy for alerting and dashboards.
- If used, FTP, SMS or USSD channels available on the UA1 can complement cellular delivery for firmware updates or alternate message delivery, while the primary Plaspy integration uses the shared server endpoint and port.
- Plaspy automatically detects the tracker protocol so you do not need to match a specific protocol identifier when the device points to the shared server and port.

## Common Configuration Workflow

1. Access the official CAREU configuration method or software such as the Bluetooth commissioning app or the manufacturer provisioning tool.  
2. Enter the Plaspy server as d.plaspy.com or the server IP 54.85.159.138 in the device server settings.  
3. Set the device port to 8888, remembering that Plaspy uses the same port for all supported devices.  
4. Choose UDP or TCP if the device firmware requires you to select a transport protocol. Plaspy will auto detect the protocol used.  
5. Configure reporting intervals, event thresholds for motion or tamper, and any required sensor forwarding such as optional BLE sensor data.  
6. Apply or save the configuration and perform a device restart if the tool or firmware requires it for settings to take effect.  
7. Validate that the UA1 reports into Plaspy by checking incoming messages and the device location in the Plaspy platform.

## Example Configuration Commands

The UA1 is typically provisioned using the official CAREU tools or the Bluetooth setup app rather than a single universal command set. Exact command syntax and the available SMS or configuration strings depend on the UA1 firmware and the vendor tool you are using. When configuring, the practical steps are to point the device to d.plaspy.com or 54.85.159.138 and set port 8888 using the CAREU configuration interface, and choose UDP or TCP as required. Because model specific command sets vary by firmware revision, reference the CAREU configuration manual for exact commands.

## Configuration Notes

- Firmware differences can change configuration menus, available transports, and exact command syntax; always confirm firmware version before following a specific command flow.
- Choosing UDP or TCP may affect delivery behavior in specific network conditions; Plaspy supports both and will auto detect the device protocol when the tracker reports to the shared server and port.
- Bluetooth commissioning is supported on the UA1 for field setup; this is often the simplest method for on site commissioning without cabling.
- FTP and SMS are supported by the UA1 for alternate workflows such as FOTA or fallback messaging, but primary Plaspy integration should use the d.plaspy.com endpoint on port 8888.
- Validate connectivity in a test area with GNSS visibility and confirm messages appear in Plaspy before wide deployment.

## Why Use Plaspy with This Configuration

Using the CAREU UA1 with Plaspy provides a low power, durable tracking solution for long term and hidden asset applications while delivering the visibility and alerting organizations need for operational oversight. The UA1’s GNSS capabilities, accelerometer based motion and tamper detection, and multiple cellular delivery options make it practical to integrate into Plaspy workflows for asset monitoring, anti theft alerts, and scheduled telemetry.

Learn more about Plaspy and how this configuration supports fleet management and asset tracking on the main Plaspy website https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify information on the CAREU manufacturer site https://www.systech-iot.com/.
