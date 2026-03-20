---
slug: /gotop/l18/configuration
id: l18-configuration
sidebar_label: Configuration
title: GOTOP - L18 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the GOTOP L18 smartwatch tracker with Plaspy including server settings and practical setup steps
keywords:
  - GOTOP L18 configuration
  - GOTOP L18 setup
  - GOTOP L18 Plaspy
  - GOTOP L18 server configuration
  - GOTOP wearable GPS
  - Plaspy device setup
  - Plaspy server settings
  - wearable GPS tracker setup
  - personnel tracking configuration
  - emergency alert configuration
---

# GOTOP - L18 Configuration

This page covers the public configuration context for using the GOTOP L18 smartwatch tracker with Plaspy. It summarizes the practical server settings, recommended preparation steps, and the typical workflow you will use to point an L18 device at Plaspy so the device can report location, SOS alerts, and telemetry into the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use this guide to apply the common server configuration and then consult GOTOP documentation or vendor tools for device specific commands or interfaces.

## Configuration Overview

The goal of this configuration is to prepare the L18 to reliably communicate with Plaspy so location, SOS alarms and health telemetry appear in your Plaspy account. The process centers on telling the device where to send data and validating that the device successfully registers with Plaspy.

- Configure the L18 to report to Plaspy by entering the Plaspy server endpoint and the shared port.
- Select the network transport (UDP or TCP) on the device if required by the configuration tool.
- Apply and save settings, then restart the watch if the tool or firmware requires it.
- Validate connectivity by confirming the L18 appears as an active device in Plaspy and that test telemetry or an SOS event is received.
- Update firmware when necessary and confirm any manufacturer specific parameters match Plaspy expectations.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the GOTOP L18:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform can accept supported device protocols without per device manual mapping

Note that Plaspy uses the same port for all supported devices and requires the device to point to d.plaspy.com or the server IP on port 8888.

## Typical Requirements Before Setup

- A charged L18 device with the watch powered on and accessible for configuration.
- An active cellular data subscription on the device via nano SIM or provisioned eSIM if cellular reporting is required.
- Access to the official GOTOP configuration method or vendor tool for the L18 (app, SMS commands, web portal, or configuration software).
- A Plaspy account and the ability to view incoming device telemetry in your Plaspy dashboard.
- Basic knowledge of selecting UDP or TCP transport if the device configuration requires a transport choice.
- Up to date firmware on the L18 if the manufacturer recommends an OTA update before provisioning.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the L18 sends its location fixes, SOS alerts, and available sensor telemetry to the shared Plaspy server endpoint and port. Plaspy ingests those messages and presents them in maps, alerts, and historical reports for monitoring and incident response.

- The L18 reports periodic location and GNSS fixes to d.plaspy.com using port 8888.
- SOS emergency alerts are transmitted to the same Plaspy server so alerts appear in your Plaspy incident streams.
- Health telemetry such as heart rate, blood pressure and SpO2 is sent as periodic or event driven messages to Plaspy for monitoring.
- The device can use either UDP or TCP transport to send data to Plaspy depending on the configuration choice.
- Plaspy automatically detects the tracker protocol on incoming connections so no per device protocol selection is required in the platform.

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software used for the L18 (manufacturer app, SMS command set, or vendor provisioning tool).
2. Enter the Plaspy server address as d.plaspy.com or optionally use the server IP 54.85.159.138 if required by your tool.
3. Set the server port to 8888.
4. Choose UDP or TCP transport if the device requires selecting a transport protocol.
5. Apply or save the configuration on the device using the manufacturer tool.
6. Restart or power cycle the L18 if the configuration process or firmware requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking for device connection and telemetry in your Plaspy dashboard.

## Example Configuration Commands

The exact configuration commands and steps for the L18 depend on GOTOP firmware and the vendor provisioning method. Because manufacturer tools vary, please consult GOTOP documentation or the configuration interface provided by your supplier for the precise command syntax and order. Plaspy requires pointing the device to d.plaspy.com or 54.85.159.138 on port 8888 and choosing UDP or TCP where applicable.

If you have GOTOP provided sample commands from your vendor or manual, apply them in the order recommended by GOTOP and use the Plaspy server settings listed above.

## Configuration Notes

- Firmware differences can change available menu options or SMS command names; always confirm exact command syntax against the device firmware release notes.
- The platform uses the same port 8888 for all devices and will automatically detect the protocol, so avoid using nonstandard ports unless directed by Plaspy support.
- TCP can give more reliable session oriented delivery while UDP may be lighter weight; choose the transport that matches your operational needs and the device capabilities.
- If using eSIM or SIM provisioning, confirm the data plan allows outbound connections to the Plaspy server domain or IP.
- When in doubt, follow GOTOP official configuration guidance and vendor provisioning tools for the L18.

## Why Use Plaspy with This Configuration

Using the GOTOP L18 with Plaspy allows organizations to consolidate wearable location, SOS alerts, and health telemetry into a single monitoring platform. This combination supports rapid incident response, real time personnel tracking, and operational oversight for care teams, field staff, and security operations.

To learn more about Plaspy and supported device integration options visit https://www.plaspy.com. Manufacturer specifications and setup methods can change over time, so verify the latest device specific configuration details and firmware behavior on the GOTOP website https://www.gotop.cc/.
