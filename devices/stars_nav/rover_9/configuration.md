---
slug: /stars_nav/rover_9/configuration
id: rover_9-configuration
sidebar_label: Configuration
title: Stars Nav - Rover 9 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the Stars Nav Rover 9 tracker to Plaspy using shared server settings and practical setup steps
keywords:
  - Stars Nav Rover 9 configuration
  - Rover 9 Plaspy setup
  - Stars Nav GPS tracker setup
  - vehicle tracker configuration
  - GPS tracker server configuration
  - fleet tracker configuration
  - Rover 9 server configuration
  - Plaspy tracker configuration
  - Rover 9 setup guide
  - vehicle telemetry configuration
---

# Stars Nav - Rover 9 Configuration

This page covers the public configuration context for using the Stars Nav Rover 9 vehicle tracker with Plaspy. It summarizes the practical server settings and the steps typically required to point a Rover 9 at Plaspy for real time tracking and telemetry ingestion. The Rover 9 is a compact, professional grade GPS tracker featuring a SiRFstarIII GNSS, GPRS communication, over the air programming, and a built in backup battery for continued reporting when vehicle power is lost.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, which simplifies integration across tracker families. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the configuration tool your vendor provides, so treat the values here as the Plaspy side of the configuration and confirm device specific commands or menus with Stars Nav documentation or your installer tools.

## Configuration Overview

The goal of the configuration process is to ensure the Rover 9 can reliably send location and telemetry to the Plaspy platform so vehicles appear in dashboards, alerts, and historical reports. In practical terms the configuration prepares the device for GPRS connectivity, sets the Plaspy endpoint, and verifies reporting behavior so fleet managers can rely on continuous visibility.

- Configure the Rover 9 to use Plaspy as its server endpoint so position and alarm messages are sent to Plaspy.
- Set transport and port options according to device menus or SMS commands so data reaches Plaspy reliably.
- Validate GPRS connectivity and GPS fixes so the device can send location and telemetry.
- Confirm that the device reports to Plaspy and appears in the platform so dashboards and alerts are active.
- Enable or test over the air update paths where available so future configuration changes can be remote.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

All devices in Plaspy use the same port which simplifies configuration across different tracker models.

## Typical Requirements Before Setup

- Device powered and installed with a functioning GPS antenna to acquire satellite fixes.
- Active GPRS data connectivity configured on the installed SIM card since Rover 9 uses GPRS communication.
- Access to the Stars Nav official configuration method such as their configuration software, SMS command set, or over the air programming tool.
- Knowledge of the device firmware revision or hardware variant to follow the correct configuration instructions.
- Administrative access to the device or installer account to apply server and transport settings.
- A short outdoor test window to verify GPS lock and immediate reporting to Plaspy.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the Rover 9 sends its GNSS positions, alarms, and telemetry over GPRS to the shared Plaspy server endpoint and port. Plaspy ingests these messages, maps the tracker protocol automatically, and exposes the information to dashboards, alerts, and reporting tools.

- The tracker is pointed to d.plaspy.com or alternatively to 54.85.159.138 and uses port 8888 for data transmission.
- Transport can be selected as UDP or TCP according to the device configuration interface or SMS command syntax.
- Plaspy automatically detects the tracker protocol so explicit protocol registration is not required on the server side.
- Telemetry such as analog inputs, alarm events, and immobilizer status are delivered to Plaspy along with location updates.
- Once reporting begins the device becomes visible within Plaspy and can be monitored for movement, alarms, and history.

## Common Configuration Workflow

1. Access the official Stars Nav configuration method or software provided by the vendor or defined in the device manual.
2. In the device server settings enter d.plaspy.com or the IP 54.85.159.138 as the server address.
3. Set the server port to 8888 which is the shared Plaspy port for all supported devices.
4. Choose UDP or TCP as the transport type if the device requires a transport selection.
5. Apply or save the configuration through the device tool, SMS command, or OTA update mechanism.
6. Restart the device if required by the Stars Nav procedure to apply changes.
7. Validate that the Rover 9 reports to Plaspy by checking device visibility in the platform and confirming recent position or telemetry messages.

## Example Configuration Commands

The exact commands and their syntax vary by Stars Nav firmware and by the configuration method you use (PC tool, SMS commands, or OTA programming). Because manufacturer command sets change over time this page does not invent device commands. In general terms you will use the Stars Nav method to set the server to either d.plaspy.com or 54.85.159.138, set the port to 8888, choose UDP or TCP if required, save the changes, and reboot the device. If you have an official Stars Nav command reference or a vendor supplied SMS template follow those exact commands to apply the values above.

## Configuration Notes

- Firmware differences can change the exact menu names, SMS command formats, or PC tool steps required to set server and transport values.
- Choose UDP for lower overhead and typical tracker message flows or TCP when a persistent session is required by a particular firmware version; test both if you experience connectivity issues.
- Confirm GPRS APN settings on the SIM if the device does not establish a data connection; APN details must match the mobile operator.
- Over the air programming is supported by Rover 9 and may be the preferred method for fleet scale changes when your vendor setup workflow allows it.
- Always verify any SMS based configuration templates against the latest Stars Nav documentation to avoid syntax errors.

## Why Use Plaspy with This Configuration

Using the Rover 9 with Plaspy brings persistent vehicle visibility, event reporting, and telemetry ingestion into one platform so operations teams can act on real time location, security events, and analog sensor data. The Rover 9's SiRFstarIII GNSS, GPRS connectivity, and over the air update capability pair well with Plaspy's automatic protocol detection and consistent server settings to reduce per device complexity.

To learn more about Plaspy visit https://www.plaspy.com. Manufacturer specifications, firmware behavior, and device configuration methods can change over time so verify the latest device specific setup details with Stars Nav at http://www.starsnav.com/ before you deploy or perform fleet wide configuration changes.
