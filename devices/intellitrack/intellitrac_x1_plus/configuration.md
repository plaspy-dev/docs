---
slug: /intellitrack/intellitrac_x1_plus/configuration
id: intellitrac_x1_plus-configuration
sidebar_label: Configuration
title: Intellitrack - Intellitrac X1 Plus Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Intellitrack Intellitrac X1 Plus server settings and Plaspy compatibility
keywords:
  - Intellitrack Intellitrac X1 Plus configuration
  - Intellitrack GPS tracker setup
  - Intellitrac X1 Plus Plaspy setup
  - vehicle tracking configuration
  - GPS tracker server settings
  - Plaspy device configuration
  - GPRS TCP UDP tracker setup
  - remote tracker configuration guide
  - asset tracking integration
  - geo fencing tracker setup
---

# Intellitrack - Intellitrac X1 Plus Configuration

This page describes the public configuration context for using the Intellitrack Intellitrac X1 Plus tracker with the Plaspy platform. It focuses on the server and transport settings required to connect the device to Plaspy, and explains what you need to prepare before integrating the tracker so it reports correctly into the platform.

Plaspy uses a shared server endpoint and consistent port across supported devices and automatically detects the tracker protocol when a device connects. Manufacturer side setup steps can vary depending on firmware version, hardware revision, installation context, and vendor configuration tools, so use this guide alongside the official Intellitrack documentation and configuration utilities.

## Configuration Overview

Configuring the Intellitrac X1 Plus for Plaspy prepares the device to forward location and event data over GPRS or CS Data into the Plaspy platform. The process is primarily about establishing reliable connectivity, ensuring correct server and transport values, and confirming the device is visible within Plaspy.

- Set the device to report to the Plaspy server endpoint and confirm the transport method.
- Verify mobile data and APN settings so the tracker can use GPRS TCP or UDP to reach Plaspy.
- Save and apply manufacturer settings, then restart the tracker if required.
- Validate that the tracker appears in Plaspy and is sending periodic position updates.
- Test event reporting such as geo fence alerts or power alarms to confirm full visibility.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the Intellitrac X1 Plus:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These values are the shared endpoint and port Plaspy uses for device connections. Enter either the domain or the IP depending on the manufacturer tool or firmware support.

## Typical Requirements Before Setup

- Access to the official Intellitrack configuration method or software from the manufacturer or vendor.
- A powered and functional Intellitrac X1 Plus with sufficient battery or external power.
- An active SIM card and valid mobile data plan if using GPRS TCP or UDP reporting.
- APN credentials for the installed SIM carrier available for configuration if required by firmware.
- Stable cellular coverage at the installation location to allow initial registration and data reporting.
- Permission or credentials to save and apply settings on the device or via the configuration utility.

## How This Tracker Connects to Plaspy

The Intellitrac X1 Plus can be configured to send location and device status to the shared Plaspy server endpoint and port. When properly configured the tracker will establish a session using the selected transport and begin reporting position, movement events, and alarms so Plaspy can display and manage that data.

- Device sends data using GPRS TCP or UDP to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy receives the incoming connection and automatically detects the tracker protocol.
- Periodic position updates and event messages are forwarded into the Plaspy platform for visibility.
- Geo fence, power alarm, and other supported events are relayed to Plaspy as configured on the device.
- Using the shared Plaspy port simplifies multi model management since all devices report to the same endpoint.

## Common Configuration Workflow

1. Access the official Intellitrack configuration method or software provided by the manufacturer or your vendor.
2. In the device server settings enter the Plaspy endpoint by domain d.plaspy.com or by IP 54.85.159.138.
3. Set the server port to 8888 as required by Plaspy.
4. Choose UDP or TCP as the transport if the device firmware requires a transport selection.
5. Enter any required APN or network credentials for the SIM carrier if using cellular data.
6. Apply or save the configuration within the manufacturer tool or via SMS/CS Data method if supported.
7. Restart the device if the configuration tool or firmware recommends a reboot to activate the new settings.
8. Validate that the device reports to Plaspy by checking for incoming position updates and events in the Plaspy platform.

## Example Configuration Commands

The Intellitrac X1 Plus supports multiple configuration methods including manufacturer software, CS Data, SMS, or over the air updates. Exact command formats and syntax vary by firmware and vendor distribution. Because commands are manufacturer specific and can change with firmware, consult the Intellitrack configuration manual for the precise SMS or CS Data commands to set server domain, port, APN, and transport.

If you have the official Intellitrack command list from your vendor, use those commands to set:
- server address to d.plaspy.com or 54.85.159.138
- port to 8888
- transport to UDP or TCP
- APN and any required network credentials

Preserve any placeholders from manufacturer templates such as [apn] or [apnu] when applying commands and replace them with carrier specific values.

## Configuration Notes

- Firmware versions and hardware revisions can change command syntax and available options. Always confirm commands against the device manual for your firmware build.
- The Intellitrac X1 Plus supports SMS, CS Data, and GPRS TCP UDP configuration methods; SMS commands may be available but vary by firmware and vendor customization.
- Choose TCP or UDP based on your installation needs and the recommendations of your vendor; Plaspy accepts either transport but the device must be set accordingly.
- All devices reporting to Plaspy use port 8888. Using the shared port simplifies server configuration across multiple tracker models.
- If you can provide both domain and IP in your configuration tool, using d.plaspy.com is preferred for maintainability, while 54.85.159.138 is available where DNS is restricted.

## Why Use Plaspy with This Configuration

Using the Intellitrac X1 Plus with Plaspy gives organizations a straightforward path to bring compact, feature rich GPS tracking into a single platform. Once the tracker is configured to report to Plaspy using the server domain or IP and port 8888, location updates, geo fence alerts, and power notifications can be monitored centrally for better operational oversight.

To learn more about Plaspy and how it supports device integration visit https://www.plaspy.com. For device specific commands, firmware details, and the latest manufacturer guidance verify current information at the Intellitrack manufacturer website https://www.systech-iot.com/.
