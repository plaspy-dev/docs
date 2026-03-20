---
slug: /coban/bn_303f/configuration
id: bn_303f-configuration
sidebar_label: Configuration
title: Coban - BN-303F Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Coban BN-303F showing Plaspy server settings and SMS commands for GPRS setup
keywords:
  - Coban BN-303F
  - BN-303F configuration
  - Coban tracker setup
  - BN-303F server configuration
  - Plaspy configuration
  - GPS tracker setup
  - vehicle tracking BN-303F
  - BN-303F SMS commands
  - BN-303F APN setup
  - BN-303F GPRS configuration
---

# Coban - BN-303F Configuration

This page covers the public configuration context for using the Coban BN-303F with Plaspy. It collects the practical, publicly available steps and SMS commands commonly used to point a BN-303F tracker at the Plaspy server endpoint and to verify basic connectivity so the device can appear and report in the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps for the BN-303F can vary with firmware version, hardware revision, installation type, and vendor tools. The commands shown here are drawn from public configuration examples and should be used alongside the manufacturer documentation when performing a final installation.

## Configuration Overview

The goal of configuring a BN-303F for Plaspy is to prepare the unit so it reliably sends GPS and event data to Plaspy, and to validate that the device is visible in the Plaspy platform. When done correctly the tracker reports location updates and alarms over GPRS to Plaspy using the platform server endpoint and port.

- Set the device APN, credentials, and GPRS server address so it can open a data session to Plaspy.
- Choose UDP or TCP transport and set the server port that Plaspy expects.
- Configure reporting intervals and event reporting so telemetry is sent at the desired frequency.
- Verify the device by sending a check command and confirming the unit appears and reports in Plaspy.
- Optionally enable protocol or sensor modes to improve reporting for accessories like fuel sensors.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port so a consistent port value is used across supported trackers

## Typical Requirements Before Setup

- A valid 2G GSM SIM card installed with an active data plan and the correct APN for the mobile operator
- Ability to send and receive SMS commands to the device if using SMS configuration
- Stable vehicle power or bench power with the device powered during configuration
- The device default password if required for SMS commands (public examples use 123456)
- Access to official manufacturer configuration instructions or tools for firmware specific differences
- A Plaspy account and the vehicle record prepared to receive the device once it reports

## How This Tracker Connects to Plaspy

The BN-303F can be configured to send location and event telemetry to the Plaspy server over 2G GPRS using TCP or UDP, with SMS as a command channel. Once configured to point at Plaspy, the device becomes visible in the platform and sends periodic and event-driven updates that Plaspy ingests and displays.

- The device reports to the shared Plaspy endpoint using the server domain or IP and the common port used by Plaspy
- Telemetry is delivered over GPRS using either TCP or UDP depending on the chosen transport
- Event reports such as SOS, ignition, door, and movement alarms are forwarded to Plaspy for alerts and history
- Plaspy receives the stream and automatically detects the tracker protocol for correct parsing and display
- SMS can be used to send configuration commands and to verify settings when data connectivity is not yet active

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software and confirm the device is responding to SMS or the vendor tool.
2. Enter the Plaspy server endpoint using domain d.plaspy.com or the server IP 54.85.159.138 where a direct IP is required.
3. Set the port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP transport if the device requires a transport selection, otherwise configure GPRS mode per vendor instructions.
5. Configure APN and APN credentials for the installed SIM so the device can establish a GPRS session.
6. Apply or save the configuration and restart the device if the manufacturer recommends a reboot.
7. Validate that the device reports to Plaspy by using the verification command and confirming the device appears and sends telemetry on the platform.

## Example Configuration Commands

The BN-303F is commonly configured via SMS commands. These commands are public examples used in many installations. The device default password in these examples is 123456. Send each line as an SMS message to the device SIM from an authorized phone.

- Optional initial factory reset
  ```
  begin123456
  ```
  Note: Use this reset only when required during initial setup.

- Set the time zone to UTC 0
  ```
  time zone123456 0
  ```

- Set the operator APN
  ```
  apn123456 {{apn}}
  ```
  Note: Replace {{apn}} with your mobile operator APN string.

- Set the APN username and password
  ```
  up123456 {{apnu}} {{apnp}}
  ```
  Note: Replace {{apnu}} with the APN username and {{apnp}} with the APN password if required. Leave placeholders empty if none.

- Point the tracker to the Plaspy server by IP and port
  ```
  adminip123456 54.85.159.138 8888
  ```
  This sets the GPRS server IP and port to the public Plaspy server address and port 8888.

- Set the report update interval
  ```
  fix060s060s***n123456
  ```
  This public example configures periodic fix and reporting intervals. Keep the original format and adjust per manufacturer guidance.

- Switch to GPRS mode to enable data reporting
  ```
  gprs123456,1,1
  ```
  or
  ```
  gprs123456
  ```
  Note: The first form is commonly used to select GPRS and transport flags depending on firmware. Follow the device manual to select UDP or TCP if the command requires parameters.

- Verify current settings
  ```
  check123456
  ```

- Enable improved reporting for fuel sensor or digital inputs
  ```
  protocol123456 18
  ```
  This command is used in public examples to adjust protocol behavior for fuel or digital sensor reporting.

Preserve the order of commands when required by your installation plan. Replace placeholders exactly and test each command response by SMS before proceeding to the next step.

## Configuration Notes

- SMS based configuration is supported and commonly used for the BN-303F but exact command formats can vary between firmware revisions.
- Choose UDP or TCP according to installer preference and network conditions. Plaspy accepts either transport on port 8888 and detects the protocol automatically.
- Verify APN, username, and password with the SIM provider before entering placeholders such as {{apn}} {{apnu}} and {{apnp}}.
- The default password 123456 is commonly shown in public examples; change the password per manufacturer recommendations after initial setup.
- Use check123456 or equivalent verification commands to confirm settings before relying on live data in Plaspy.

## Why Use Plaspy with This Configuration

Configuring the BN-303F to report to Plaspy gives fleet managers and vehicle owners consistent visibility into location, alarms, and event history using a shared, well known platform endpoint. With a straightforward SMS configuration flow for APN and server settings, the BN-303F can be brought online quickly to feed telemetry into Plaspy for live tracking, geofence alerts, and historical reporting.

Learn more about how Plaspy works and additional platform features at https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and official commands verify information on the manufacturer site https://www.coban.net/ as device behavior and command syntax can change across firmware and hardware revisions.
