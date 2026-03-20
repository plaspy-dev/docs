---
slug: /eelink/gpt18/configuration
id: gpt18-configuration
sidebar_label: Configuration
title: EElink - GPT18 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink GPT18 to connect with Plaspy using shared server settings and SMS commands
keywords:
  - EElink GPT18 configuration
  - EElink GPT18 setup
  - EElink GPT18 server configuration
  - GPT18 Plaspy setup
  - GPT18 SMS configuration
  - Plaspy server settings
  - wearable GPS tracker configuration
  - GPS tracker SMS commands
  - personal tracker Plaspy integration
  - tracker provisioning guide
---

# EElink - GPT18 Configuration

This page documents the public configuration context for using the EElink GPT18 wearable tracker with the Plaspy platform. It focuses on the practical steps and server settings you will use to point a GPT18 device to Plaspy so the device can report location and event data to the platform. Where available, the page includes the SMS command examples published for GPT18 provisioning.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the backend. Exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so follow the device manufacturer instructions alongside the examples below.

## Configuration Overview

This configuration prepares a GPT18 tracker to send its location and events to Plaspy so the device becomes visible for monitoring, alerting, and reporting inside the Plaspy platform. The process typically ensures the device has network access, correct APN settings, and the Plaspy server configured either by domain or IP.

- Point the device to Plaspy server endpoint so telemetry is delivered to your Plaspy account
- Configure APN and GPRS parameters to enable mobile data if SMS only is not desired
- Validate connectivity and reporting with live telemetry or the device parameter check
- Set sensible reporting intervals to balance accuracy and battery life
- Confirm alerts such as SOS and low battery are forwarded to Plaspy once communication is established

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured to use either transport
- Plaspy automatically detects the tracker protocol so all devices can use the same port

## Typical Requirements Before Setup

- A charged GPT18 and physical access to the device for initial provisioning
- A valid SIM with data or SMS capability as required by your chosen configuration method
- The correct APN details from the mobile operator; placeholders may be used in SMS commands
- Access to the official EElink configuration method such as SMS commands, mobile app, or vendor software
- An understanding of the required reporting interval and alert preferences for the deployment
- Administrative access to Plaspy so you can confirm the device appears in your account after provisioning

## How This Tracker Connects to Plaspy

The GPT18 sends location and event data over the cellular network to the shared Plaspy server endpoint and port. Once configured to target Plaspy, the device will deliver telemetry that Plaspy ingests, displays, and uses to trigger alerts or reports.

- Device reports are sent to d.plaspy.com or directly to 54.85.159.138 on port 8888
- Device transport may be UDP or TCP depending on your configuration choice
- Plaspy receives location, status and event messages and associates them with your device in the platform
- SOS events, low battery notices, and geofence alerts are forwarded into Plaspy for monitoring workflows
- Plaspy automatically detects the tracker protocol so you can use the shared Plaspy port for supported devices

## Common Configuration Workflow

1. Access the official EElink configuration method for your GPT18 device, for example SMS provisioning, the vendor app, or vendor configuration tools.
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the IP 54.85.159.138.
3. Set the server port to 8888 for the device to reach Plaspy.
4. Choose UDP or TCP if the tracker requires a transport selection during setup.
5. Configure APN and other operator parameters so the device can connect to the mobile data network if needed.
6. Apply or save the configuration and restart the device if the device or vendor instructions require a reboot.
7. Validate the device reports to Plaspy by checking device telemetry in your Plaspy account or using the device parameter query command.

## Example Configuration Commands

The GPT18 supports SMS-based provisioning. The following commands are public examples used to configure the device by SMS. Send each line as a single SMS message to the device number. Preserve the placeholders when present.

1. Optional initial factory reset (use only if you need to restore defaults)
```text
FACTORY#
```

2. Set the time zone to UTC 0
```text
GMT,E,0#
```

3. Set the operator APN
- Replace [apn] with your operator APN
- If needed, include [apnu] for APN username and [apnp] for APN password
```text
APN,[apn]{{,[apnu],[apnp]}}#
```
(If your device or vendor requires separate fields, use the format shown by your supplier. The placeholders [apn], [apnu], and [apnp] should be substituted with real values.)

4. Set the GPRS server using the Plaspy domain (preferred for DNS resolution)
```text
SERVER,1,d.plaspy.com,8888#
```

5. Or set the GPRS server using the Plaspy IP directly
```text
SERVER,0,54.85.159.138,8888#
```

6. Set the reporting interval to 60 seconds
```text
TIMER,60#
```

7. Verify current device parameters
```text
PARAM#
```

Notes on these commands:
- The SERVER command examples show both domain and IP options. Use either d.plaspy.com or 54.85.159.138 with port 8888.
- The APN command contains placeholders. Replace them with your carrier details before sending.
- The device may accept configuration via other vendor tools or the vendor mobile app in addition to SMS.

## Configuration Notes

- The exact SMS syntax and supported fields can vary by firmware version and vendor customization; always confirm the command format with EElink documentation if unsure.
- For devices that require selecting a transport protocol, choose UDP or TCP based on network and vendor instructions; Plaspy supports both and detects protocol automatically on the backend.
- Use the SERVER command with the domain d.plaspy.com when possible so DNS resolves to the current Plaspy endpoint; the IP form 54.85.159.138 is provided as an alternative.
- If configuring over SMS, ensure the device has a working SIM and that SMS provisioning is permitted by the SIM plan.
- After provisioning, validate reporting by using PARAM# or by confirming the device appears and reports correctly in Plaspy.

## Why Use Plaspy with This Configuration

Configuring the EElink GPT18 to report to Plaspy provides centralized visibility for personal safety use cases. With the device pointed to Plaspy, caregivers and monitoring teams receive timely location, SOS alerts, and device status updates so they can respond quickly and maintain operational oversight.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the latest device specific setup steps, firmware notes, and manufacturer guidance consult EElink at https://www.eelink.com.cn/ since configuration methods and firmware behavior can change over time.
