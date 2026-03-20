---
slug: /queclink/gv200/configuration
id: gv200-configuration
sidebar_label: Configuration
title: QuecLink - GV200 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for configuring QuecLink GV200 trackers to work with Plaspy using shared server settings
keywords:
  - QuecLink GV200 configuration
  - QuecLink GV200 setup
  - GV200 server configuration
  - GV200 Plaspy setup
  - QuecLink tracker configuration
  - GPS tracker configuration
  - vehicle tracking setup
  - Plaspy device setup
  - GV200 GPRS configuration
  - QuecLink GPS platform setup
---

# QuecLink - GV200 Configuration

This page provides public configuration guidance for using the QuecLink GV200 tracker with the Plaspy platform. It summarizes the practical steps and server values you will apply on the device so the GV200 can report location and events to Plaspy. Where public manufacturer commands are available they are included as examples that many installers use to prepare the tracker for a backend server.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the tracker connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use this page as practical guidance and verify device specific details with official QuecLink documentation.

## Configuration Overview

The configuration process prepares the GV200 to send its telemetry to Plaspy and ensures the device is reachable and visible in the platform. For GV200 units that accept SMS configuration commands, the public command examples below show a common setup order including an optional factory restore, time zone, APN, server endpoint, reporting interval, and input mapping.

- Configure the device APN and GPRS settings so it can reach Plaspy over the cellular network.
- Point the tracker to the Plaspy server domain or IP so position reports arrive at the platform.
- Choose UDP or TCP transport and set the shared Plaspy port used by all devices.
- Validate reporting by confirming the tracker logs in and sends periodic position updates.
- Optionally enable inputs or events such as SOS or alarm inputs so those events appear in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- Physical access to the GV200 for power and to confirm device readiness.  
- An active cellular SIM card with a data plan and SMS capability inserted in the device.  
- SMS credit or a configuration channel if you plan to use SMS commands for setup.  
- Access to QuecLink configuration method accepted by your device such as SMS commands or official PC mobile tools.  
- The device password if the tracker requires authentication for remote configuration; the default password used in the public examples below is queclink.  
- Confirmation of the correct APN settings for the local cellular operator.

## How This Tracker Connects to Plaspy

The GV200 is configured to send location and event reports to the shared Plaspy server endpoint and port so that Plaspy can display location, history, and alerts for the device. Plaspy accepts the incoming connection and automatically interprets the tracker protocol to integrate the data into the platform.

- The tracker sends periodic position updates to d.plaspy.com or to the fallback IP 54.85.159.138 on port 8888.  
- Transport can be UDP or TCP depending on tracker settings and installer preference.  
- Events such as SOS, inputs, and scheduled reports are forwarded to Plaspy for alerting and logging.  
- Plaspy automatically detects the tracker protocol so the platform can decode messages without per device protocol mapping.  
- Once reporting is validated the device becomes visible in Plaspy for monitoring and historical playback.

## Common Configuration Workflow

1. Access the official QuecLink configuration method or software for the GV200 such as SMS commands or the vendor recommended tool.  
2. Configure the device APN using your operator values so GPRS data can be established.  
3. Enter the Plaspy server endpoint using d.plaspy.com or the server IP 54.85.159.138.  
4. Set the server port to 8888 and select UDP or TCP if your device requires a transport selection.  
5. Apply or save the configuration on the device and, if required, restart the device to apply settings.  
6. Validate that the GV200 reports to Plaspy and that positions and events appear in the platform.  
7. Adjust reporting intervals, inputs, and alarm settings as needed and revalidate.

## Example Configuration Commands

The GV200 can be configured using SMS commands. The examples below are public sample commands. The device password shown is the default queclink. Replace placeholders and values to match your SIM APN and operational preferences. Send each line as a single SMS to the device unless your provisioning tool supports batch commands.

- Optional initial step Restore factory settings
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Set the time zone to UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Set the operator APN
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
Explanation: [apn] is the APN name for your mobile operator, [apnu] is the APN username if required, and [apnp] is the APN password if required. Keep placeholders and fill with operator values.

- Set the GPRS server to Plaspy by domain and IP on port 8888
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Note: This command includes both the Plaspy domain d.plaspy.com and the server IP 54.85.159.138 and sets port 8888. Plaspy automatically detects the tracker protocol. The device may accept either the domain or IP; using both provides redundancy in many firmware versions.

- Set the position update interval to 60 seconds
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Enable SOS button notification on input 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Send these commands according to your provisioning workflow. The order shown is commonly used to ensure network, server, and interval settings are established before enabling event reporting.

## Configuration Notes

- The public SMS commands above use the default device password queclink. If the password has been changed on a unit, use the current password when sending SMS configuration.  
- APN placeholders [apn], [apnu], and [apnp] must be replaced with the operator specific values for the SIM card in the device.  
- Firmware versions and hardware revisions can change the exact command syntax or supported parameters. Verify command compatibility with the unit firmware.  
- Choose UDP or TCP based on your deployment needs and any local network conditions. Both transports are supported for Plaspy on port 8888.  
- SMS based provisioning is a common method for field configuration but official QuecLink tools or PC software may provide a more controlled workflow for bulk provisioning.

## Why Use Plaspy with This Configuration

Using the QuecLink GV200 with Plaspy gives organizations centralized visibility over vehicle locations and event data. Configuring the GV200 to report to Plaspy with the shared server settings enables near real time tracking, event alerts, and historical playback in a single platform, helping operations teams respond to incidents and monitor fleet behavior.

To learn more about Plaspy and how it supports device integrations visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and technical documentation for the QuecLink GV200 consult the manufacturer site at https://www.queclink.com/ to confirm current details and procedures.
