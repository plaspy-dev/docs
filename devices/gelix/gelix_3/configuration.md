---
slug: /gelix/gelix_3/configuration
id: gelix_3-configuration
sidebar_label: Configuration
title: Gelix - Gelix 3 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring Gelix 3 with Plaspy including server settings and practical steps for device integration
keywords:
  - Gelix Gelix 3 configuration
  - Gelix 3 setup
  - Gelix 3 server configuration
  - Gelix 3 Plaspy
  - Gelix tracker configuration
  - GPS tracker setup
  - power data logger configuration
  - tracker integration guide
  - Plaspy server settings
  - device telemetry configuration
---

# Gelix - Gelix 3 Configuration

This page documents the public configuration context for using the Gelix 3 tracker with Plaspy. It summarizes the practical server settings and the typical steps you will follow to point a Gelix 3 device at Plaspy so the device can report telemetry and event data into the platform. The Gelix 3 is a power consumption data logger with an embedded GSM GPRS modem or Ethernet port and is commonly used for monitoring, event reporting, and remote device control.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side configuration steps can vary by firmware revision, hardware variant, installation type, and vendor configuration tools; this page provides the public Plaspy endpoint details and a practical workflow to apply them for Gelix 3 devices.

## Configuration Overview

The goal of this configuration is to prepare a Gelix 3 unit to communicate reliably with the Plaspy backend so device data is visible and actionable inside the platform. You will configure the device to send its data to the Plaspy endpoint, select the transport the device supports, and validate connectivity so that device events appear in Plaspy.

- Enter the Plaspy server endpoint on the Gelix 3 using the manufacturer configuration interface.
- Configure the transport and port so the device can open a session to Plaspy.
- Ensure the device has valid network connectivity through the built in GSM GPRS modem or Ethernet port.
- Apply and save settings, then restart the device if the manufacturer instructions require it.
- Verify the device is reporting successfully to Plaspy and visible in the platform.

## Plaspy Server Settings

Use these public Plaspy connection settings when configuring the Gelix 3:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on the device configuration option
- Plaspy automatically detects the tracker protocol after the device connects

These settings are the shared server endpoint that Plaspy uses for all supported devices.

## Typical Requirements Before Setup

- Access to the Gelix 3 manufacturer configuration method or software as provided by Gelix
- Power and physical access to the device for initial setup and any required restarts
- Network connectivity for the device variant in use such as an active SIM for GSM GPRS modem models or a live Ethernet connection for Ethernet models
- Knowledge of the device firmware version and vendor documentation for configuration steps
- Administrative access to any tool or portal used to enter server and transport settings
- Optional test SIM or network environment to validate outgoing connections before installation

## How This Tracker Connects to Plaspy

When configured for Plaspy, the Gelix 3 sends its telemetry and event data to the shared Plaspy server endpoint and port. Once the device has an active network path to the configured server and the correct transport is set, Plaspy will detect the protocol automatically and begin ingesting device messages for visibility and monitoring.

- The device is pointed to d.plaspy.com or directly to 54.85.159.138
- The device sends data over port 8888
- You may choose UDP or TCP if the device requires a transport selection
- Plaspy receives device messages and maps the reported data into the platform
- Visibility in Plaspy allows operational monitoring, event alerts, and data logging

## Common Configuration Workflow

1. Access the official Gelix configuration method or software as provided in the manufacturer documentation.
2. Locate the network or server configuration section where you can enter the remote server address.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
4. Set the communication port to 8888.
5. Choose the transport mode UDP or TCP if the device requires you to select one.
6. Apply or save the configuration changes in the Gelix tool or device menu.
7. Restart the device if the manufacturer instructions indicate a restart is required.
8. Validate that the device is reporting to Plaspy by checking device visibility and recent messages in the Plaspy platform.

## Example Configuration Commands

The Gelix 3 model configuration commands and exact syntax vary by firmware and the manufacturer configuration utility. Because Gelix provides several ways to configure the device (embedded web UI, vendor software, or configuration files), the exact commands or menu steps are not universal and will depend on the tool you use. Refer to the Gelix official configuration guide included with your hardware for the precise command format and examples.

If you are using a vendor tool that accepts textual commands or SMS style configuration, follow the manufacturer's published command reference and substitute the Plaspy server details shown above for any server or IP and port placeholders.

## Configuration Notes

- Firmware and hardware revisions can change menu names and available settings; confirm the exact steps for your Gelix 3 revision in the vendor documentation.
- Choose UDP or TCP based on the options the device firmware exposes; both are supported by Plaspy and the platform will detect the protocol automatically.
- For GSM GPRS variants, ensure APN and SIM provisioning are correct before attempting to reach d.plaspy.com.
- For Ethernet variants, verify physical network connectivity and any required network settings such as static IP or DHCP configuration per Gelix instructions.
- Keep a record of your configuration changes and firmware version to aid troubleshooting and future updates.

## Why Use Plaspy with This Configuration

Configuring a Gelix 3 to report to Plaspy provides centralized visibility and centralized data collection for power consumption, event monitoring, and device telemetry. Organizations that need continuous monitoring, remote control, or consolidated reporting benefit from sending Gelix 3 data into Plaspy where it can be visualized, processed, and used for operational decision making.

Learn more about Plaspy and how it supports device integration at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify the official Gelix documentation at http://www.gelix.com/ as vendor procedures and firmware may change over time.
