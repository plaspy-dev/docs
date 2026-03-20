---
slug: /khd/kg100/configuration
id: kg100-configuration
sidebar_label: Configuration
title: KHD - KG100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the KHD KG100 GPS tracker to Plaspy with practical server and workflow details
keywords:
  - KHD KG100 configuration
  - KG100 server configuration
  - KHD KG100 setup for Plaspy
  - KG100 tracking software configuration
  - KHD GPS tracker setup
  - KG100 platform integration
  - vehicle tracking KG100
  - KG100 GPRS configuration
  - Plaspy tracker configuration
  - KHD KG100 deployment
---

# KHD - KG100 Configuration

This page covers the public configuration context for using the KHD KG100 tracker with Plaspy. It summarizes the shared Plaspy server settings, explains the practical steps to point the device to the platform, and describes common prerequisites and validation checks you can perform after setup. The guidance here is focused on the general, manufacturer independent items that Plaspy requires for connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use this page to prepare the KG100 for Plaspy and consult the official KHD documentation or installer tools for model specific commands and menus.

## Configuration Overview

Preparing the KG100 for Plaspy means configuring the device to report to Plaspy's shared server endpoint and validating that it can communicate reliably over the mobile network. The process is typically performed using the manufacturer configuration method such as desktop software, a smartphone app, or SMS commands depending on the device and firmware.

- Configure the KG100 to send data to the Plaspy server endpoint and port.
- Ensure the tracker has proper mobile connectivity and any required APN settings.
- Choose the appropriate transport option if the device requires UDP or TCP selection.
- Save and apply settings on the device and restart if the device or firmware requires it.
- Validate that the device is visible and actively reporting in Plaspy.

## Plaspy Server Settings

Use the following public server settings when configuring the KG100 to report to Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

All devices configured for Plaspy use the same port and Plaspy will automatically detect the correct tracker protocol once the device sends data to the service.

## Typical Requirements Before Setup

- A powered and functional KG100 unit with visible indicator lights according to the manufacturer manual.
- A valid SIM card and active mobile data service if using GPRS/GSM communications as supported by the KG100.
- APN and carrier details ready for entry if the device requires manual APN configuration.
- Access to the official KHD configuration method such as PC software, mobile app, or SMS command set.
- Basic information for the device such as IMEI or device ID used by Plaspy for identification.
- A clear plan for testing such as a vehicle or bench test area with cellular coverage.

## How This Tracker Connects to Plaspy

When configured, the KG100 sends location and status messages over the mobile network to the shared Plaspy server endpoint and port. Plaspy receives the incoming data, automatically identifies the tracker protocol, and presents the device on the platform for monitoring and reporting.

- The tracker reports position and status messages to d.plaspy.com or 54.85.159.138 on port 8888.
- Choose UDP or TCP transport on the KG100 if the device requires a transport selection.
- Plaspy detects the protocol and maps incoming data to the correct device record.
- Once data reaches Plaspy the device becomes visible for real time tracking and history playback.
- Event reporting and alerts configured in Plaspy will be triggered from the incoming device messages.

## Common Configuration Workflow

1. Access the official KHD KG100 configuration method such as the PC software, smartphone app, or the device SMS command set.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 as required by Plaspy.
4. Choose UDP or TCP if the device requires transport selection and save that selection.
5. Apply or save the configuration to the KG100 using the manufacturer tool or command.
6. Restart the device if the firmware or installer instructions require a reboot to apply settings.
7. Validate that the device reports to Plaspy by confirming the device appears and sends data to the platform.

## Example Configuration Commands

The KG100 can be configured using the manufacturer provided methods which may include PC configuration software, a mobile configuration app, or SMS commands. Exact command syntax and procedure vary by firmware and toolset, so follow the official KHD instructions for your device revision. If you use SMS configuration, the manufacturer documentation will provide the required command templates and any placeholder fields to fill such as APN credentials.

## Configuration Notes

- Firmware and hardware revisions can change available menus and command syntax; always confirm the method for your specific KG100 unit.
- Choose UDP or TCP based on installer preference and network conditions; both transports are supported by Plaspy.
- If using GPRS, ensure APN settings are entered correctly in the device configuration according to your mobile carrier.
- SMS based setup can be useful for field configuration but refer to KHD documentation for exact SMS command formats.
- Plaspy uses a single port across devices and automatically detects tracker protocol so focus on making sure the device can reach the d.plaspy.com endpoint.

## Why Use Plaspy with This Configuration

Using the KHD KG100 with Plaspy provides a straightforward way to bring vehicle location and status into a centralized platform for monitoring, route playback, and event handling. With the KG100 reporting to Plaspy, fleet operators gain visibility into device activity and can use Plaspy tools for operational oversight and reporting.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please verify the latest device specific configuration methods and firmware behavior with the manufacturer at http://www.khd.hk as setup steps and command syntax can change over time.
