---
slug: /xirgo/xt24/configuration
id: xt24-configuration
sidebar_label: Configuration
title: Xirgo - XT24 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup notes for Xirgo XT24 configuration with Plaspy including server values and SMS setup commands for quick deployment
keywords:
  - Xirgo XT24 configuration
  - Xirgo XT24 setup
  - Xirgo XT24 server configuration
  - Xirgo XT24 Plaspy setup
  - XT24 GPS tracker configuration
  - Xirgo tracker configuration
  - vehicle tracking XT24
  - XT24 OBD GPS configuration
  - Plaspy tracker configuration
  - fleet tracking XT24
---

# Xirgo - XT24 Configuration

This page documents the public configuration context for using the Xirgo XT24 OBD GPS tracker with Plaspy. It describes the shared Plaspy server settings you will point the tracker to, outlines practical setup steps, and reproduces the publicly available SMS configuration commands that are commonly used to prepare the device for Plaspy integration.

Plaspy uses a single shared server endpoint and port across supported devices and automatically detects the tracker protocol at the server side. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so verify device-specific details against official Xirgo documentation and any tooling your installer uses.

## Configuration Overview

Configuring the XT24 for Plaspy prepares the tracker to send GNSS positions and OBD telemetry into the Plaspy platform reliably. The process typically sets the operator APN where required, configures the GPRS/packet server target to Plaspy, and validates the transport and reporting after the device is saved and restarted.

- Point the XT24 to the Plaspy server endpoint so it can send position and OBD telemetry to Plaspy.
- Configure the cellular APN and any required SIM operator parameters for data connectivity.
- Set the device server entry to the Plaspy server IP or domain on the shared Plaspy port.
- Verify transport selection (UDP or TCP) and ensure the tracker uses the configured transport to reach Plaspy.
- Confirm the device is visible and reporting in Plaspy after applying changes and restarting if needed.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP supported; configure the device to use one of these transports if required
- Protocol detection: Plaspy automatically detects the tracker protocol on incoming connections

Note: All devices in Plaspy use the same port, and the platform will detect the protocol automatically once data reaches d.plaspy.com or 54.85.159.138 on port 8888.

## Typical Requirements Before Setup

- Confirm the XT24 has power from the vehicle OBD port and any backup battery is charged if installed.
- Ensure the device has a working cellular SIM with an active data plan and the correct APN details.
- Have access to the official Xirgo configuration method supported by your unit such as SMS, vendor tool, or installer interface.
- Know the operator APN credentials and any required username or password placeholders for your SIM.
- Be able to restart or power cycle the device after applying configuration to ensure settings take effect.
- Confirm you have the tracker IMEI or identifier available for validation in Plaspy.

## How This Tracker Connects to Plaspy

The XT24 reports GNSS position and OBD telemetry to Plaspy by sending its data to the shared Plaspy server endpoint using the configured transport. Plaspy ingests those messages and automatically determines the tracker protocol so telemetry appears in the correct device stream.

- The tracker is configured to report to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Data can be sent over UDP or TCP depending on device configuration and network preferences.
- Plaspy automatically detects the tracker protocol once messages arrive on the shared Plaspy port.
- Telemetry visible in Plaspy includes GNSS positions plus OBD-derived vehicle parameters when the vehicle exposes those PIDs.
- After configuration and a successful connection, the device will appear and report events and location in Plaspy.

## Common Configuration Workflow

1. Access the official Xirgo configuration method for your XT24 unit such as SMS commands or vendor configuration software.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the GPRS/packet server target.
3. Set the server port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Configure the operator APN and any required APN username or password placeholders for your SIM.
6. Apply or save the configuration and restart or power cycle the device if required.
7. Validate that the device reports to Plaspy and appears in the platform with location and telemetry.

If your installer tool or firmware requires other steps, follow vendor instructions in addition to the steps above.

## Example Configuration Commands

The XT24 can be configured by sending SMS commands to the device. The following public SMS commands are provided in the device configuration guidance and should be sent in the order shown when using SMS setup.

1. Set the operator APN
- Send this SMS to set APN and optional APN username and password placeholders:
```
+XT:1002,[apnu],[apnp],[apn]
```
Explanation:
- [apn] is the APN string provided by your mobile operator.
- [apnu] is the APN username if required, or leave placeholder empty if not used.
- [apnp] is the APN password if required, or leave placeholder empty if not used.

2. Set the GPRS server target for Plaspy
- Send this SMS to point the tracker to Plaspy on the shared port. The order matters for server and port configuration:
```
+XT:1001,8888,54.85.159.138,4,0,0
```
Explanation:
- This sets the server IP to 54.85.159.138 and the port to 8888. Transport and other flags follow the vendor's parameter order. You can alternatively point to d.plaspy.com if the device accepts a domain.

Notes:
- These SMS commands are public configuration examples provided in device documentation. If your variant accepts domain names, use d.plaspy.com in place of the IP as appropriate.
- If you are using a vendor configuration tool instead of SMS, apply the same values for server domain or IP and port 8888 and select UDP or TCP as required.

## Configuration Notes

- Firmware variations may change the exact SMS syntax or parameter order. Always verify the command format against your CTN or Xirgo provisioning guide.
- Some XT24 firmware versions accept a domain name such as d.plaspy.com while others may require a direct server IP. Use the method supported by your unit.
- Choose between TCP and UDP based on network reliability and your installation needs; Plaspy supports both transports and will detect protocol automatically.
- SMS-based setup is a documented public option for the XT24 in this configuration and is useful when out-of-band configuration is needed during deployment.
- Keep the device IMEI handy to confirm the device identity and to verify reporting in Plaspy after configuration.

## Why Use Plaspy with This Configuration

Using the XT24 with Plaspy enables fleet operators to combine compact plug-and-play OBD installation with centralized visibility and telemetry ingestion. Pointing the XT24 to Plaspy allows GNSS positions and vehicle-bus data to flow into the platform for real-time tracking, route history, alerts, and fleet reporting without per-device port variation.

Learn more about Plaspy and how it supports connected vehicle workflows at https://www.plaspy.com. For device specific commands, firmware behavior, and the most current setup details please verify information with the manufacturer at https://xirgo.com/ as vendor documentation and firmware changes can alter configuration methods over time.
