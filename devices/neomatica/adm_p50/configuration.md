---
slug: /neomatica/adm_p50/configuration
id: adm_p50-configuration
sidebar_label: Configuration
title: Neomatica - ADM P50 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Neomatica ADM P50 for Plaspy with practical server settings and setup guidance for reliable personal and asset tracking
keywords:
- Neomatica ADM P50 configuration
- Neomatica ADM P50 setup
- ADM P50 server configuration
- ADM P50 Plaspy setup
- Neomatica GPS tracker configuration
- ADM P50 tracking software configuration
- Plaspy device configuration
- ADM P50 GPS platform setup
- personal tracker Neomatica setup
- asset tracking ADM P50
---

# Neomatica - ADM P50 Configuration

This page documents the public configuration context for using the Neomatica ADM P50 with Plaspy. It focuses on the practical server settings and the typical steps required to point the ADM P50 at Plaspy, validate connectivity, and enable tracking and event reporting on the Plaspy platform. The content here summarizes what is publicly applicable for integration and complements the Neomatica product documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once a device successfully connects. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so use this page as practical guidance and check Neomatica documentation for device specific details.

## Configuration Overview

The configuration process prepares the device to report location and event data to Plaspy and ensures those messages arrive reliably for map display, alerts, and history. For a battery powered tracker like the ADM P50 this also includes tuning reporting behavior to balance real time visibility and battery autonomy.

- Point the device to the Plaspy server endpoint so telemetry is routed into the platform
- Choose the transport method the device supports and set the shared Plaspy port
- Save and apply configuration changes using Neomatica tools or supported methods
- Restart or cycle power if required so the device connects to Plaspy and registers
- Verify the ADM P50 appears in Plaspy and that location, SOS, and motion events are visible

## Plaspy Server Settings

Use the following public Plaspy connection settings when configuring the ADM P50 to send data to Plaspy:

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on the device configuration option  
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

Configure your device to use one of the transport options above and the listed endpoint so Plaspy can ingest location and event messages.

## Typical Requirements Before Setup

- A charged ADM P50 with sufficient battery for configuration and initial testing
- A working SIM profile if the device uses cellular GPRS for data reporting
- Access to the Neomatica configuration method or software for the ADM P50 such as USB Type C tools or the vendor supplied configuration app
- Knowledge of the device firmware version and any vendor release notes that affect server settings or message formats
- Basic access to Plaspy account or device management area to confirm the device appears after setup
- A plan for testing connectivity outdoors or where GNSS reception and cellular coverage are available

## How This Tracker Connects to Plaspy

The ADM P50 is configured to send its location and event telemetry to the shared Plaspy server endpoint and port so the platform can present real time and historical data. Once the tracker is pointed at Plaspy and authorized on the network, Plaspy recognizes the incoming protocol and maps messages to the appropriate device.

- The device reports GNSS fixes and periodic route uploads to d.plaspy.com on port 8888
- LBS fallback points and other non GNSS location sources are forwarded to Plaspy when GNSS is not available
- Motion states and sleep transitions from the accelerometer are sent as events to Plaspy for state monitoring
- SOS and panic button events are transmitted to Plaspy to trigger alerts and notifications
- Plaspy receives the messages over UDP or TCP and automatically detects the tracker protocol for ingest

## Common Configuration Workflow

1. Access the official Neomatica configuration method or software for the ADM P50 using the provided USB Type C connection or vendor tool.  
2. Enter the Plaspy server endpoint by specifying d.plaspy.com or the server IP 54.85.159.138 as the destination host.  
3. Set the device port to 8888 which is the shared Plaspy port for all devices.  
4. Choose UDP or TCP if the device requires a transport selection and save that option.  
5. Apply or save the configuration in the Neomatica tool so settings are written to the device.  
6. Restart the ADM P50 or cycle its power if required for the new server settings to take effect.  
7. Validate that the device reports to Plaspy by confirming the unit appears in Plaspy and that initial location or event messages arrive.

## Example Configuration Commands

No public device commands are included with this page. Exact configuration commands and the method to send them vary by Neomatica firmware and the vendor supplied configuration tool. Use the official Neomatica configuration utility or documented SMS or USB commands provided in the ADM P50 manual to set the server host to d.plaspy.com or 54.85.159.138 and the port to 8888. Refer to Neomatica documentation for command syntax and examples specific to your firmware version.

## Configuration Notes

- Firmware variations and hardware revisions can change command syntax or available menu fields so always check the ADM P50 release notes before applying configuration steps.  
- If the device offers both UDP and TCP choose the transport that matches your operational needs and test both when in doubt; Plaspy supports both.  
- Battery optimized modes on the ADM P50 may reduce reporting frequency which affects real time visibility in Plaspy; adjust reporting intervals as required.  
- Use the USB Type C configuration path or the official Neomatica tool for the most reliable setup and to apply firmware updates.  
- Dual SIM or embedded SIM setups require confirming which SIM is active for data so the device can reach the Plaspy server endpoint.

## Why Use Plaspy with This Configuration

Pointing the Neomatica ADM P50 at Plaspy provides a straightforward way to add portable, battery powered tracking to your monitoring workflows. With Plaspy ingesting GNSS, LBS fallback, accelerometer events, and SOS alerts from the ADM P50, teams can gain improved visibility for personal safety, asset protection, and mobile operations without introducing complex device specific server changes.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. Because device specific configuration methods, firmware behavior, and manufacturer details can change over time verify the latest ADM P50 instructions and firmware with the manufacturer at https://neomatica.com/ before deploying at scale.
