---
slug: /supermate/d10/configuration
id: d10-configuration
sidebar_label: Configuration
title: Supermate - D10 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Supermate D10 with Plaspy including required server settings and setup workflow
keywords:
  - Supermate D10 configuration
  - Supermate D10 setup
  - Plaspy configuration
  - GPS tracker configuration
  - D10 server configuration
  - vehicle tracking setup
  - tracker platform integration
  - real time tracking configuration
  - geo fencing setup
  - SOS tracker configuration
---

# Supermate - D10 Configuration

This page describes the public configuration context for using the Supermate D10 GPS tracker with Plaspy. It focuses on the server settings, typical prerequisites, and the practical steps required to point the device to Plaspy so the tracker becomes visible in the platform. The content is intended for technical users, installers, and fleet managers preparing the D10 for operation with Plaspy.

Plaspy uses shared server settings across supported trackers and automatically detects the device protocol once the tracker is pointed to the Plaspy endpoint. Exact manufacturer-side setup steps for the Supermate D10 can vary by firmware, hardware revision, installation type, and vendor configuration tools, so use this guide together with the official Supermate documentation and your installer procedures.

## Configuration Overview

Configuring the Supermate D10 for Plaspy prepares the unit to send its location and event data to a single Plaspy endpoint so devices appear in the platform. The D10's compact design, real time tracking, geo fencing, and SOS features make it suitable for many use cases; configuration simply ensures the device reports correctly to Plaspy for monitoring and alerts.

- Point the device to the Plaspy server so location updates reach the platform.
- Choose the transport protocol and port supported by the device and Plaspy.
- Validate connectivity and that the D10 is reporting after configuration.
- Enable or test event reporting such as geo fence alerts and SOS if required.
- Confirm visibility and correct device identification inside Plaspy.

## Plaspy Server Settings

Use the following public server settings when configuring the Supermate D10 to report to Plaspy. Plaspy uses the same port for all supported devices and it automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- The Supermate D10 should be powered and reachable by the installer or configuration tool.
- If the tracker requires cellular connectivity, ensure a valid SIM with mobile data and GSM coverage is installed and active.
- Access to the official Supermate configuration method such as the manufacturer's software, SMS commands, or configuration cable as provided by the vendor.
- Basic device identification information ready for Plaspy registration if required by your account or installer workflow.
- A test plan to validate location updates, geo fence triggering, and SOS behavior after configuration.

## How This Tracker Connects to Plaspy

The Supermate D10 sends its location and event data to the Plaspy server endpoint so the device can be tracked and managed on the platform. Once configured to use the Plaspy endpoint and port, the platform will receive the tracker's telemetry and make it available for monitoring, alerts, and reporting.

- The D10 is configured to report to the shared Plaspy server endpoint d.plaspy.com or the server IP.
- Data is sent to Plaspy on port 8888 which Plaspy uses for all devices.
- Transport can be set to UDP or TCP depending on device options and installer preference.
- Plaspy automatically detects the tracker protocol when data arrives.
- Once reporting starts, location updates, geo fence events, and SOS alerts become visible in Plaspy.

## Common Configuration Workflow

1. Access the official Supermate configuration method or software supplied by the manufacturer or your installer.
2. In the device server or APN settings enter the Plaspy server as either d.plaspy.com or 54.85.159.138.
3. Set the server port to 8888 to match Plaspy's listening port.
4. Choose UDP or TCP if the device requires you to select a transport protocol.
5. Apply or save the configuration in the Supermate tool or via the device interface.
6. Restart the D10 if the manufacturer instructions require a reboot to apply changes.
7. Validate that the device reports to Plaspy by checking for incoming data and device visibility in the platform.

## Example Configuration Commands

The Supermate D10 can be configured through the manufacturer's official tools or command methods. Exact SMS strings, serial commands, or utility steps depend on the firmware and vendor tools and are not universal across all D10 units. Consult your Supermate documentation or vendor tool for the precise command syntax used for your firmware version.

## Configuration Notes

- Firmware and hardware revisions can change the exact configuration steps and available menu names; always verify against the device manual.
- Some installers prefer UDP for lower overhead and others choose TCP for reliable delivery; both transports are supported by Plaspy on port 8888.
- Market variations and carrier behavior can affect mobile connectivity; ensure the SIM and APN are configured per local carrier requirements.
- Plaspy's automatic protocol detection reduces the need to select a protocol in the platform, but the device must be pointed to d.plaspy.com or 54.85.159.138 on port 8888.
- If your configuration method includes placeholders such as APN values or user credentials, preserve them and follow manufacturer guidance for replacement.

## Why Use Plaspy with This Configuration

Using the Supermate D10 configured to report to Plaspy provides a straightforward way to gain real time visibility and event monitoring across assets. For organizations that need operational oversight, geo fence alerts, and reliable location updates, directing the D10 to Plaspy centralizes incoming data and enables consistent tracking workflows.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please verify the latest device specific setup steps, firmware notes, and manufacturer guidance on the official Supermate site http://www.gps-summit.com/ as methods and firmware behavior may change over time.
