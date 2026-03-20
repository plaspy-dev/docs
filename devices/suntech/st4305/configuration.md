---
slug: /suntech/st4305/configuration
id: st4305-configuration
sidebar_label: Configuration
title: Suntech - ST4305 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for the Suntech ST4305 showing Plaspy server settings, SMS commands, APN placeholders, and verification steps
keywords:
  - Suntech ST4305 configuration
  - ST4305 setup Plaspy
  - Suntech GPS tracker configuration
  - ST4305 server configuration
  - Suntech ST4305 SMS setup
  - ST4305 APN settings
  - Suntech vehicle tracker setup
  - ST4305 Plaspy guide
  - Suntech tracker configuration
  - vehicle tracking ST4305
---

# Suntech - ST4305 Configuration

This page covers the public configuration context for using the Suntech ST4305 series tracker with Plaspy. It collects the practical server settings, SMS command templates, and workflow guidance that are publicly available for preparing an ST4305 device to report into the Plaspy platform. Use this page as a hands‑on reference when integrating ST4305 devices into your Plaspy fleet.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on connection, but exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The ST4305 supports SMS configuration in its public guidance; this page includes those SMS command templates and explains how to derive the required device ID and placeholders such as {{apn}}, {{apnu}}, and {{apnp}}.

## Configuration Overview

Preparing an ST4305 for Plaspy means configuring the device to report to Plaspy's shared server endpoint and verifying that it successfully transmits location and event data. The public configuration flow for ST4305 commonly uses the device IMEI to build a device ID and SMS commands to set network and reporting parameters.

- Configure the device APN and GPRS/server settings so the tracker can reach Plaspy.
- Set the device reporting interval and other telemetry parameters for the expected fleet visibility.
- Ensure the device ID is derived correctly from the IMEI so Plaspy can associate incoming telemetry with the right asset.
- Verify connectivity by using the manufacturer verification command and then confirm the device appears in Plaspy.
- Use the Plaspy shared server settings (domain or IP and port) so the tracker sends data to the platform endpoint that Plaspy monitors.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (used by all devices in Plaspy)  
- Transport: UDP or TCP supported by the device; choose the transport if required by the device configuration method  
- Plaspy automatically detects the tracker protocol when the device connects to the server

These exact values are the public Plaspy settings to use when configuring an ST4305 to report into the platform.

## Typical Requirements Before Setup

- A powered and accessible ST4305 unit with its IMEI available (IMEI is required to derive the tracker device ID).  
- A working SIM card with appropriate data and SMS capabilities for the target mobile network and device variant.  
- APN and optional APN username and password information from the SIM operator to populate {{apn}}, {{apnu}}, and {{apnp}} placeholders.  
- Access to the manufacturer's recommended configuration method (SMS commands, service tool, or configuration utility) so settings can be applied.  
- Basic knowledge of whether the device should use UDP or TCP for the connection if the device requires selecting transport.  
- Access to Plaspy account or onboarding steps to confirm the device appears in the platform once reporting begins.

## How This Tracker Connects to Plaspy

The ST4305 is configured to send its location and telemetry to the Plaspy platform using the shared Plaspy endpoint and port. Typically the device uses its cellular link to reach the configured APN and then posts telemetry to the Plaspy server address and port.

- The tracker is set to report to d.plaspy.com or the Plaspy server IP 54.85.159.138 on port 8888.  
- Data transport can use UDP or TCP depending on the device configuration and installer choice.  
- Plaspy automatically inspects incoming connections and detects the tracker protocol so devices can be identified without separate protocol selection on the platform.  
- Once configured and online, the device sends periodic position and event reports at the configured reporting interval for live maps and history in Plaspy.  
- Verification commands or preset checks can be used to confirm the device accepted the settings before validating on the Plaspy side.

## Common Configuration Workflow

1. Access the official Suntech configuration method for the ST4305 (SMS commands as described by the manufacturer or their configuration tool).  
2. Determine the device ID by using the IMEI: remove the last digit and take the final six digits of the remaining IMEI sequence. For example, IMEI 123456789012345 yields device ID 901234 in the manufacturer example.  
3. Enter the Plaspy server address (d.plaspy.com) or server IP (54.85.159.138) into the device configuration.  
4. Set the port to 8888 (Plaspy uses the same port for all devices).  
5. Choose UDP or TCP transport if the device requires a transport selection and the installation needs a specific transport.  
6. Apply or save the configuration on the device using the manufacturer method (send SMS commands or use the tool).  
7. Restart or power cycle the device if required by the device firmware to apply settings.  
8. Validate the device reports to Plaspy by using the manufacturer verification command and confirming the device appears in Plaspy.

## Example Configuration Commands

The ST4305 public guidance provides SMS command templates for network and reporting setup. The manufacturer uses a device ID derived from the IMEI (last 6 digits prior to the final IMEI digit). The placeholders {{apn}}, {{apnu}}, and {{apnp}} should be replaced with your SIM operator APN, APN username, and APN password when required. Replace {{device_id}} with the six digit ID derived from the IMEI as described above.

1) Set the operator APN and GPRS server (includes Plaspy server IP and port)
```text
SA200NTW;{{device_id}};02;0;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```
- Notes:  
  - {{device_id}} is the device ID derived from IMEI (last 6 digits excluding final IMEI digit).  
  - The APN fields {{apn}}, {{apnu}}, and {{apnp}} must be filled with your operator values.  
  - The command includes the Plaspy server IP 54.85.159.138 and port 8888. You may substitute d.plaspy.com in place of the IP if the device accepts domain names.

2) Set the reporting interval to 60 seconds
```text
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```
- Notes: This command configures multiple report intervals; the example sets a primary reporting interval of 60 seconds.

3) Check settings or request current preset A parameters
```text
SA200CMD;{{device_id}};02;PresetA
```
- Notes: Use this verification command to request the device to return current PresetA configuration values so you can confirm the settings were applied.

Preserve the order above when applying these commands if the device expects network settings before reporting interval changes. If your device supports sending the server by domain name, the server domain d.plaspy.com may be used instead of the numeric IP.

## Configuration Notes

- The exact SMS syntax and parameter order may vary by firmware version and regional device variant; always verify the command format with the manufacturer's documentation for your device revision.  
- The ST4305 public flow uses SMS commands in these examples, so ensure the SIM can receive SMS and the device has GSM connectivity during configuration.  
- Choose UDP or TCP according to installation and network conditions; some installers prefer UDP for lower overhead while others use TCP for guaranteed delivery. Plaspy supports both and auto detects the protocol.  
- The APN placeholders {{apn}}, {{apnu}}, and {{apnp}} must be filled with operator values. If your SIM does not require username or password, leave {{apnu}} and {{apnp}} empty as allowed by the device syntax.  
- The device ID is derived from the IMEI using the manufacturer rule shown above; incorrect device IDs will prevent Plaspy from associating telemetry with the proper asset.

## Why Use Plaspy with This Configuration

Using the ST4305 configured to report to Plaspy gives fleet operators centralized visibility into vehicle location, status, and reported events. The recommended Plaspy server settings and the sample SMS commands above help bring an ST4305 online with Plaspy for real time tracking, alerts, and historical reporting that support fleet operations and recovery workflows.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer guidance verify details on the Suntech official site http://www.suntechint.com/ as manufacturer specifications and setup steps can change over time.
