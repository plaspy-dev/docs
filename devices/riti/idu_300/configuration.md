---
slug: /riti/idu_300/configuration
id: idu_300-configuration
sidebar_label: Configuration
title: Riti - IDU-300 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Riti IDU-300 showing Plaspy server settings and practical setup guidance for fleet tracking integration
keywords:
  - Riti IDU-300 configuration
  - Riti IDU-300 setup
  - Riti IDU-300 Plaspy
  - IDU-300 server configuration
  - IDU-300 GPS tracker
  - Riti fleet tracker
  - 3G vehicle tracker setup
  - GPS tracker configuration
  - fleet management tracker
  - eLocation integration
---

# Riti - IDU-300 Configuration

This page documents the public configuration context for using the Riti IDU-300 with the Plaspy platform. It summarizes the shared server settings Plaspy requires, practical configuration steps, and the common checks installers and administrators perform when bringing an IDU-300 online for fleet tracking. The information here is intended to help prepare the device and validate connectivity to Plaspy while relying on manufacturer tools for device specific actions.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The IDU-300 is a 3G Intelligent Data Unit compatible with vehicle accessories and the Riti eLocation system, and you should confirm device specific procedures with Riti documentation when applying the public Plaspy settings described below.

## Configuration Overview

Configuring an IDU-300 for Plaspy focuses on directing the device to the Plaspy server endpoint, selecting the appropriate transport, and confirming the device successfully reports its data to the platform. The goal is to make the unit visible in Plaspy while preserving any accessory or event reporting the device supports.

- Point the IDU-300 to the Plaspy server endpoint by domain or IP and set the shared Plaspy port.
- Choose the transport method the device firmware requires, typically UDP or TCP.
- Save and apply the configuration using Riti configuration tools or procedures.
- Restart the device if required and verify reporting to Plaspy.
- Validate accessory data or event reporting in the platform once connectivity is confirmed.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the IDU-300. These are the shared values Plaspy uses for all supported devices.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device firmware and choice
- Plaspy automatically detects the tracker protocol so the platform can accept connections from the IDU-300 once the server and port are set

## Typical Requirements Before Setup

- Ensure the IDU-300 is powered and installed according to Riti instructions.
- Confirm a working 3G data connection and an active SIM data plan suitable for device telemetry.
- Have access to the official Riti configuration method or software required to change network settings and server endpoints.
- Record the device identifier such as IMEI or serial number so you can match the device to the vehicle in Plaspy.
- Verify local radio coverage and that any required accessories are connected if you plan to forward accessory telemetry.

## How This Tracker Connects to Plaspy

When configured, the IDU-300 sends location and device data to the Plaspy server endpoint and port specified in the device configuration. Plaspy receives the incoming telemetry and automatically detects the protocol so the device can be registered and monitored within the platform.

- The device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Data transport is sent over UDP or TCP depending on the device setting.
- Location updates, alarms, and accessory telemetry are forwarded to Plaspy for visibility and reporting.
- Plaspy automatically detects the tracker protocol to normalize incoming data from the IDU-300.
- Once reporting begins the device becomes visible in the Plaspy fleet view and event logs.

## Common Configuration Workflow

1. Access the official Riti configuration method or software for the IDU-300 as described by Riti documentation.
2. Locate the network or server settings section where the server domain or IP is entered.
3. Enter d.plaspy.com or alternatively enter the server IP 54.85.159.138 if your tool prefers an IP.
4. Set the port to 8888 as Plaspy uses the same port for all supported devices.
5. Choose UDP or TCP if the device requires explicit transport selection based on firmware support.
6. Apply or save the configuration within the Riti tool or device menu.
7. Restart the IDU-300 if required by the tool or firmware to activate the new server settings.
8. Validate connectivity by confirming the device reports to Plaspy and appears in the platform.

## Example Configuration Commands

The IDU-300 may be configured through Riti provided software, a web interface, or in some cases manufacturer tools. Exact commands and steps vary by firmware and the configuration interface offered by Riti. Because this public guide does not include device specific command strings, follow the Riti configuration tool instructions and apply the Plaspy settings shown above (d.plaspy.com or 54.85.159.138 and port 8888, UDP or TCP). If you have Riti supplied SMS or console commands from official documentation, apply the server and port values there in the order recommended by the manufacturer.

## Configuration Notes

- Firmware differences can change the configuration menu structure and the exact wording for server and transport settings; always check the installed firmware version.
- Choosing UDP or TCP can affect reliability and latency depending on network conditions and firmware behavior; test both if unsure.
- Because Plaspy uses a single shared port for all supported devices, the same port is entered regardless of tracker model.
- Accessory telemetry from the IDU-300 such as dispatch panels or temperature sensors will follow the device reporting behavior configured by Riti.
- Keep a copy of any configuration backup exported from Riti tools so you can restore known good settings if needed.

## Why Use Plaspy with This Configuration

Using the Riti IDU-300 with Plaspy gives organizations a straightforward path to integrate 3G vehicle telemetry into a single fleet platform. Directing the IDU-300 to Plaspy's shared server endpoint and port makes it possible to consolidate location, event, and accessory data for operational monitoring, dispatch, and historical analysis.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For device specific instructions, firmware release notes, and the latest configuration tools always verify the current information on the manufacturer site https://www.riti.com.tw/ since setup methods and firmware behavior can change over time.
