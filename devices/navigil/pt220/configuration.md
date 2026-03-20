---
slug: /navigil/pt220/configuration
id: pt220-configuration
sidebar_label: Configuration
title: Navigil - PT220 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for integrating the Navigil PT220 with Plaspy using shared server settings
keywords:
  - Navigil PT220 configuration
  - PT220 setup for Plaspy
  - Navigil PT220 server configuration
  - PT220 GPS tracker setup
  - GPS tracker Plaspy integration
  - PT220 GPRS configuration
  - personal tracker configuration
  - PT220 tracking software setup
  - Plaspy device configuration
  - PT220 deployment guide
---

# Navigil - PT220 Configuration

This page provides public configuration guidance for using the Navigil PT220 with Plaspy. It focuses on the shared server settings and the practical steps you will use to point the PT220 at Plaspy for live reporting. The content is intended as a public reference for technicians and integrators configuring the device to communicate with Plaspy.

Plaspy uses the same server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side configuration steps can vary by firmware version, hardware revision, installation type, or vendor tools, so use this page as a practical starting point and confirm details against Navigil documentation when needed.

## Configuration Overview

Configuring the PT220 for Plaspy prepares the device to send location and event data to Plaspy so the unit is visible and manageable in the platform. The PT220 supports automatic GPRS reporting and an SMS query mode, so the configuration process ensures the chosen communication method is enabled and that the reporting endpoint is set to Plaspy.

- Point the PT220 reporting destination to the Plaspy server so periodic and event driven reports arrive in the platform
- Choose the device transport mode that matches your deployment and network conditions
- Validate connectivity and reporting after applying settings so the device appears in Plaspy
- Preserve power and reporting intervals appropriate for personal use to match PT220 battery life goals
- Confirm firmware and vendor tool specifics before making permanent changes

## Plaspy Server Settings

- Server domain d.plaspy.com for tracker reporting
- Server IP 54.85.159.138 as an alternate endpoint for device configuration
- Port 8888 is used by Plaspy for all supported devices
- Transport support: configure the device to use UDP or TCP on port 8888 if the device requires a transport selection
- Plaspy automatically detects the tracker protocol when the device connects and uses the same port for all devices

## Typical Requirements Before Setup

- A charged Navigil PT220 with an active SIM card installed if using GPRS reporting
- Access to the Navigil configuration method or software provided by the vendor
- USB cable or power source to keep the device powered during configuration and testing
- Knowledge of whether you will use automatic GPRS mode or manual SMS mode for reporting
- Network coverage and data allowance on the SIM card for GPRS mode
- A PC or mobile device to access vendor tools or to send configuration SMS commands if supported

## How This Tracker Connects to Plaspy

The PT220 can be configured to send periodic location updates and event reports to the Plaspy endpoint so the device becomes visible in the platform. In GPRS mode it will push data automatically to the Plaspy server and port. In SMS mode it can be queried by SMS or call to return its position, which is useful for occasional checks.

- The device is configured to report to the shared Plaspy server endpoint at d.plaspy.com or 54.85.159.138
- Reports are sent to port 8888 which Plaspy uses for all devices
- You may choose UDP or TCP as the transport when configuring the tracker if the PT220 requires a selection
- Plaspy will detect the tracker protocol automatically upon connection and process the incoming data
- Validation consists of confirming periodic or event driven reports arrive in Plaspy after configuration

## Common Configuration Workflow

1. Access the official Navigil configuration method or vendor software for the PT220
2. Insert and activate a SIM card and ensure the device has sufficient battery or is powered by USB for configuration
3. Enter the Plaspy server domain d.plaspy.com or alternatively use the server IP 54.85.159.138 in the device destination settings
4. Set the port to 8888 which is used by Plaspy for all devices
5. Choose UDP or TCP if the device requires a transport selection
6. Apply or save the configuration in the device settings and, if recommended, restart the PT220
7. Validate that the device reports to Plaspy by checking for incoming location messages in the platform

## Example Configuration Commands

The exact configuration commands and formats depend on the Navigil PT220 firmware and the vendor configuration tool you use. Manufacturer tools may present a GUI where you enter the server domain or IP and port, or they may accept SMS or serial commands. Because the PT220 configuration method can vary, consult the Navigil configuration guide or vendor interface for the precise command syntax to set the server to d.plaspy.com or 54.85.159.138 and port 8888.

If your vendor tool uses plain text commands or SMS commands to set server and port, enter the destination and transport exactly as shown in the Plaspy Server Settings section. Preserve any placeholders the vendor documentation requires when setting APN values or credentials.

## Configuration Notes

- Firmware differences may change available menu names and command syntax; always reference the Navigil documentation for your exact firmware version
- Choose UDP or TCP based on network reliability and the vendor recommendation for the PT220 in your environment
- For battery powered personal trackers be careful with reporting intervals to balance visibility and battery life
- SMS mode can be useful for occasional location queries but will not provide continuous tracking unless the device is put into GPRS mode
- Keep a record of the configured transport and endpoint so future troubleshooting and audits are simpler

## Why Use Plaspy with This Configuration

Using the Navigil PT220 with Plaspy gives organizations and individual users a straightforward way to collect position reports and event data in a central platform. Plaspy's shared server settings and protocol detection reduce configuration complexity by letting you point the PT220 at a single destination and rely on the platform to interpret the tracker protocol.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific setup details, firmware notes, and configuration commands verify information on the manufacturer website http://www.navigil.com/.
