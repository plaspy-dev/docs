---
slug: /arusnavi/arnavi_l2_cigarette_lighter/configuration
id: arnavi_l2_cigarette_lighter-configuration
sidebar_label: Configuration
title: Arusnnavi - Arnavi L2 (cigarette lighter) Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Arusnavi Arnavi L2 cigarette lighter GPS tracker to work with Plaspy using shared server settings and practical setup guidance
keywords:
  - Arusnavi Arnavi L2 configuration
  - Arnavi L2 Plaspy setup
  - Arusnavi GPS tracker configuration
  - cigarette lighter tracker setup
  - Plaspy server configuration
  - Arnavi L2 tracking setup
  - GPS platform integration Plaspy
  - fleet tracking Arnavi L2
  - Arnavi L2 BLE sensor setup
  - Arnavi L2 installation guide
---

# Arusnavi - Arnavi L2 (cigarette lighter) Configuration

This page describes the public configuration context for using the Arusnavi Arnavi L2 cigarette lighter GPS tracker with the Plaspy platform. It focuses on the practical server settings and setup workflow needed to point the device to Plaspy so the tracker can report location, status, and sensor data for real time monitoring and historical reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use the guidance below to prepare the Arnavi L2 for Plaspy, and consult Arusnavi documentation for device specific procedures.

## Configuration Overview

This configuration process prepares the Arnavi L2 to communicate reliably with Plaspy so fleet managers can view vehicle location, ignition and sensor status, and receive alerts. The goal is to apply the shared Plaspy endpoint and port on the device and confirm that the device uploads buffered data when connectivity is restored.

- Configure the device to report to the Plaspy server endpoint so it appears in the Plaspy platform.
- Ensure mobile data and SIM settings are correct so the tracker can establish a GPRS connection.
- Select the appropriate transport (UDP or TCP) if required and set the same port used by Plaspy.
- Validate real time tracking and buffered data upload after a short test drive or simulated movement.
- Verify BLE sensor pairing and ignition input reporting if those features are used.

## Plaspy Server Settings

- Plaspy server domain d.plaspy.com
- Plaspy server IP 54.85.159.138
- Port 8888
- Transport can be UDP or TCP depending on the device configuration option
- Plaspy automatically detects the tracker protocol so the platform will parse supported device messages
- Note that Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- Device powered from the cigarette lighter socket and physically installed for a stable GNSS view
- Active Nano SIM with data enabled and a compatible 2G GPRS plan if required by local networks
- Access to the official Arusnavi configuration tools such as the web portal, USB PC tool, or mobile app for remote configuration
- A computer or smartphone with the manufacturer configuration utility if USB or Bluetooth configuration is required
- Knowledge of the device APN and any carrier credentials required for data connectivity
- Confirm the device firmware version and obtain the latest manufacturer documentation where available

## How This Tracker Connects to Plaspy

The Arnavi L2 is configured to send position, status, and sensor telemetry to the shared Plaspy server endpoint and port so Plaspy can display live location, alarms, and historical tracks. Data that could not be uploaded immediately is buffered locally and uploaded when the connection is reestablished.

- Periodic position and GNSS fixes are transmitted to d.plaspy.com on port 8888 using UDP or TCP
- Status and input changes such as ignition on off are reported and processed in Plaspy
- Bluetooth LE sensor data and internal sensor readings are relayed to Plaspy for telemetry and alerting
- Buffered black box records are uploaded to the same Plaspy endpoint once a connection is available
- Plaspy automatically detects the tracker protocol to correctly parse the incoming messages

## Common Configuration Workflow

1. Access the official Arusnavi configuration method or software (USB PC tool, mobile app, or web remote configuration) as provided by the manufacturer.
2. Locate the server or monitoring settings section in the device configuration tool.
3. Enter d.plaspy.com or alternatively enter the IP address 54.85.159.138 as the server endpoint.
4. Set the device port to 8888.
5. Choose UDP or TCP if the device requires selection of transport protocol.
6. Apply or save the configuration on the device and upload or write settings to the tracker.
7. Restart the device if the configuration tool or device indicates a reboot is required.
8. Validate that the device reports to Plaspy by observing the unit appear online, checking a recent position update, and confirming buffered records are uploaded if applicable.

## Example Configuration Commands

The manufacturer provides several configuration methods including USB PC tool, web remote configuration, and mobile app. Exact configuration commands and SMS strings are dependent on Arusnavi firmware and the chosen configuration interface and are not included here as public commands. Use the official Arusnavi tools to set the server to d.plaspy.com or 54.85.159.138 and the port to 8888, and select UDP or TCP if required by the device.

If you have specific command strings or SMS configuration provided by Arusnavi, apply them in the order the manufacturer specifies and preserve placeholders such as APN credentials where indicated by the device documentation.

## Configuration Notes

- Firmware differences can change the configuration menu names and available options; always confirm the steps against the device firmware release notes.
- Choose UDP for lower overhead and typical tracker message patterns, or TCP if the device or your network requires a connection oriented transport. Both transports are supported by Plaspy.
- Ensure the mobile operator supports 2G GPRS for data in your deployment area since the device uses GSM 2G GPRS for telemetry.
- BLE sensor pairing and configuration is handled by the Arusnavi mobile app or configuration tool and may require separate sensor enrollment steps.
- If you rely on black box buffering, test by disabling mobile data briefly and verifying records upload when connectivity returns.

## Why Use Plaspy with This Configuration

Using the Arnavi L2 with Plaspy gives organizations a fast, plug in telematics option for vehicles that must remain portable and interchangeable. The cigarette lighter form factor, multi GNSS positioning and BLE sensor support combine with Plaspy server connectivity to provide near real time location, ignition and sensor visibility without hardwiring installations.

Learn more about Plaspy features and platform capabilities at https://www.plaspy.com. For the most current device specific configuration commands, firmware details, and installation instructions, verify the latest information on the Arusnavi manufacturer website https://www.arusnavi.ru.
