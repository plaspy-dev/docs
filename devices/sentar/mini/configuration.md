---
slug: /sentar/mini/configuration
id: mini-configuration
sidebar_label: Configuration
title: Sentar - Mini Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Sentar Mini GPS tracker showing how to connect the device to Plaspy using shared server settings
keywords:
  - Sentar Mini configuration
  - Sentar Mini setup
  - Sentar Mini Plaspy
  - Mini GPS tracker configuration
  - Sentar tracker setup
  - Plaspy device configuration
  - GPS tracker setup guide
  - personal tracker configuration
  - tracker SMS commands
  - Sentar Mini server settings
---

# Sentar - Mini Configuration

This page documents the public configuration context for using the Sentar Mini GPS Tracker with Plaspy. It collects the practical server settings and example device commands that are commonly used to point a Mini tracker at Plaspy ingestion endpoints and validate connectivity. Use this guide together with the device instructions and vendor tools to complete setup.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol for incoming connections. Manufacturer-side setup steps for the Mini can vary by firmware version, hardware revision, installation type, and the vendor configuration tool; the examples below are public SMS commands and workflow guidance commonly used for initial provisioning.

## Configuration Overview

The configuration process prepares the Mini to communicate telemetry and location updates to Plaspy by setting the device server endpoint, transport, and basic reporting behavior. When properly configured, the Mini will send regular uploads to the Plaspy server so the device becomes visible in the Plaspy dashboard and can participate in alerts and geofencing.

- Configure server endpoint to point to Plaspy by domain or IP so device traffic reaches Plaspy ingestion.
- Choose transport (UDP or TCP) and set the shared port used by Plaspy for device data.
- Verify SIM and mobile data settings such as APN so the device can reach the internet.
- Confirm device reporting interval and telemetry settings so Plaspy receives timely updates.
- Validate the device is reporting to Plaspy and appears in the platform before deployment.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (this is the same port used for all devices in Plaspy)  
- Transport: the device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol for incoming device connections

These settings are the public Plaspy values to use when configuring the Mini to report to the platform.

## Typical Requirements Before Setup

- A charged and accessible Sentar Mini device with the ability to receive SMS commands or vendor configuration tools.
- An active SIM card with a data plan and the correct operator APN for GPRS/4G connectivity.
- Knowledge of the device default password (the Mini examples below use 123456 as the default).
- Access to the manufacturer's SMS command list or official setup tool for the Mini.
- A way to verify device reporting (Plaspy dashboard visibility or platform logs).

## How This Tracker Connects to Plaspy

The Mini sends location and device telemetry over the cellular network to Plaspy’s shared server endpoint and port so devices are visible and trackable in Plaspy dashboards. Plaspy receives uplinks and uses them for live tracking, route history, and event notifications.

- The device is configured to report to the Plaspy server endpoint using d.plaspy.com or the Plaspy IP address 54.85.159.138.
- All device traffic is sent to port 8888; Plaspy uses the same port for all supported devices.
- The tracker may use UDP or TCP transport; select the transport supported by the device and network.
- Plaspy automatically detects the tracker protocol once the device connects to the server and begins sending data.
- Regular upload intervals allow Plaspy to provide real-time location, status, and history.

## Common Configuration Workflow

1. Access the official Sentar Mini configuration method or software (for this model the device supports SMS-based configuration as shown below).  
2. Enter the Plaspy server address by using d.plaspy.com or the IP 54.85.159.138 in the device server settings.  
3. Set the device port to 8888 (Plaspy uses this same port for all devices).  
4. Choose UDP or TCP if the device requires you to select a transport protocol.  
5. Apply or save the configuration changes on the device (SMS reply or tool confirmation).  
6. Restart the device if the manufacturer recommends a reboot after configuration.  
7. Validate that the device reports to Plaspy and appears in the platform, and verify expected telemetry and location updates.

If you use the SMS commands below, follow manufacturer guidance about command syntax and order.

## Example Configuration Commands

The Mini can be configured by sending SMS commands to the device. The following commands are public examples provided for the Sentar Mini. The sample setup uses the default device password 123456. Preserve placeholders such as [apn], [apnu], and [apnp] and replace them with operator-specific values when required.

- Factory reset (optional initial setup):
```text
pw,123456,factory#
```

- Set the time zone to UTC+0:
```text
pw,123456,lz,0,0#
```

- Check SIM IMSI (MCC and MNC) to confirm operator codes:
```text
pw,123456,imsi#
```

- Set operator APN where xxx is MCC and yy is MNC. Replace [apn], [apnu], [apnp] with your operator APN, username, and password as required:
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```
Explanation: [apn] is the mobile operator APN string, [apnu] is the APN username if required, and [apnp] is the APN password if required. The trailing xxxyy is a placeholder combining MCC and MNC when the device expects that format.

- Set GPRS server to Plaspy by IP and port (as provided in public settings):
```text
pw,123456.ip,54.85.159.138,8888#
```

- Set upload (report) interval to 300 seconds:
```text
pw123456,upload,300#
```

- Verify current settings (status check):
```text
pw,123456,ts#
```

Note: These commands are extracted from public device configuration examples. Exact command syntax and separators must match the device firmware expectations. If a command fails, consult Sentar documentation or vendor support for exact SMS formatting.

## Configuration Notes

- SMS-based setup is supported by the Mini in public examples; use SMS commands carefully and verify syntax for your device firmware.
- The default device password shown in public examples is 123456; change device passwords according to your security requirements after initial provisioning.
- Manufacturer firmware versions and command parsers can vary; commands that work on one firmware revision may require different separators or ordering on another.
- Choose TCP or UDP transport according to network behavior and device support; Plaspy accepts either on port 8888 and will auto-detect the protocol.
- Always validate the device appears in Plaspy after configuration using the platform dashboard or device logs.

## Why Use Plaspy with This Configuration

Using the Sentar Mini with Plaspy provides simple integration for personal and small-asset tracking where compact hardware and continuous location reporting are required. Pointing the Mini at Plaspy’s shared server endpoint and port lets organizations centralize location, battery, and status telemetry in Plaspy for monitoring, geofencing, and historical review.

Learn more about Plaspy at https://www.plaspy.com. For the latest device-specific commands, firmware behavior, and manufacturer details, verify setup information on the Sentar website http://www.sentarsmart.com/ since manufacturer procedures and firmware may change over time.
