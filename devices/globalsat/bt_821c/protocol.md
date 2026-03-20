---
slug: /globalsat/bt_821c/protocol
id: bt_821c-protocol
sidebar_label: Protocol
title: GlobalSat - BT-821C Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the GlobalSat BT 821C with Plaspy for GNSS data streaming and integration
keywords:
  - GlobalSat BT 821C protocol
  - BT 821C GPS protocol
  - GlobalSat GNSS Bluetooth
  - BT 821C NMEA
  - BT 821C RTCM
  - Plaspy compatibility
  - Plaspy device protocol
  - GNSS Bluetooth receiver
  - fleet tracking BT 821C
  - vehicle tracking GlobalSat
---

# GlobalSat - BT-821C Protocol

This page covers the public protocol context for using the GlobalSat BT-821C GNSS receiver with Plaspy. It explains how the BT-821C functions as a positioning source, how its standard GNSS output is used in Plaspy workflows, and what role the tracker reporting protocol plays in real time tracking and telemetry scenarios.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once a device or gateway reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by BT-821C firmware, hardware revision, and manufacturer implementation, so the information below focuses on public, non sensitive protocol context and practical integration notes.

## Protocol Overview

The BT-821C supplies GNSS data as a Bluetooth connected receiver using standard GNSS sentences and correction messages. In Plaspy deployments the BT-821C typically pairs to a host device or gateway that forwards position data to the Plaspy service so it can be used for mapping, alerts, and fleet monitoring.

- Outputs standard NMEA 0183 sentences such as GGA GSA GSV and RMC that provide position time and satellite information.
- Supports RTCM corrections so a host can apply differential corrections when a correction feed is available.
- Acts as a Bluetooth GNSS source to a smartphone tablet or gateway which then reports location to Plaspy for dashboarding and telemetry.
- The protocol role is to provide consistent, timestamped positioning and satellite state so Plaspy can ingest and display accurate location data.
- Using standard formats like NMEA and RTCM increases interoperability with hosts and gateways that speak Plaspy compatible reporting protocols.

## How Plaspy Detects the Protocol

Plaspy listens for device reports at a single shared endpoint and automatically determines the correct tracker protocol based on the inbound data and source configuration. Users generally do not need to choose a protocol manually inside Plaspy when devices or gateways are configured to report to the Plaspy server.

- Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy uses port 8888 for device connections and all supported devices use the same port.
- Devices or gateways may be configured to use UDP or TCP on port 8888 to report data to Plaspy.
- When a Plaspy capable host receives NMEA or RTCM from the BT-821C it can forward that data to the Plaspy endpoint where protocol detection and ingestion occur automatically.
- Automatic detection means the platform matches incoming data to known device patterns and routes it into the appropriate device feed without user selection in many common cases.

## Transport and Connection Context

The BT-821C itself is a Bluetooth GNSS receiver that provides GNSS sentences to a paired host. That host or gateway is responsible for transporting position data to Plaspy using the network transports Plaspy supports. Understanding the transport layer helps ensure reliable delivery and correct configuration of the reporting endpoint.

- The device may be configured to report to Plaspy using UDP or TCP on port 8888 depending on host or gateway capabilities.
- Reporting endpoints can target the domain d.plaspy.com or the server IP 54.85.159.138 as required by network or DNS constraints.
- Plaspy uses the same port across all devices which simplifies firewall and network setup for fleets and gateways.
- For BT-821C deployments the typical flow is BT-821C over Bluetooth to host, then host forwards GNSS data to Plaspy using the chosen transport.
- Ensure the gateway or host that pairs with the BT-821C is set to point to the Plaspy endpoint and is configured for the appropriate transport protocol.

## Protocol Compatibility Notes

- The BT-821C outputs standard NMEA 0183 sentences and accepts RTCM corrections but exact sentence sets and RTCM support can vary with firmware revisions.
- Because the BT-821C is a Bluetooth GNSS receiver, compatibility with Plaspy relies on the host or gateway correctly forwarding GNSS data to Plaspy.
- Different host implementations or gateway firmware may select UDP or TCP for forwarding; confirm transport behavior when troubleshooting connectivity.
- Manufacturer firmware updates or hardware revisions can change available messages or correction support so verify the device firmware level when diagnosing issues.
- Validate compatibility against official GlobalSat documentation and test behavior on the specific host or gateway you plan to use with Plaspy.
- Network constraints such as carrier NAT or firewall rules can affect connectivity to d.plaspy.com or 54.85.159.138 on port 8888 so coordinate with network administrators.

## Why Protocol Understanding Matters

Understanding how the BT-821C communicates and how its GNSS output is forwarded to Plaspy helps ensure correct setup and reliable operation in production tracking systems. Awareness of protocol and transport details reduces configuration errors and speeds up troubleshooting when position data is not appearing as expected.

- Helps determine whether a connectivity issue stems from the BT-821C pairing Bluetooth issues host software or network transport settings.
- Guides correct configuration of gateway forwarding to the Plaspy endpoint d.plaspy.com on port 8888 using UDP or TCP as appropriate.
- Assists in identifying whether RTCM corrections or SBAS feeds are being delivered and applied by the host for improved accuracy.
- Makes firmware differences and revision impacts easier to evaluate during testing and rollouts.
- Improves long term reliability by clarifying which components are responsible for data formatting transport and delivery.

## Why Use Plaspy with This Protocol

Using the GlobalSat BT-821C as a GNSS source for Plaspy gives organizations a practical path to better location quality without rewiring vehicles or replacing existing telematics hardware. The BT-821C supplies a high sensitivity external position feed using standard NMEA and RTCM, and when paired with a Plaspy capable host or gateway it improves real time tracking accuracy for mapping geofencing and fleet monitoring.

If you want to learn more about Plaspy and how the platform handles device reporting and protocol detection visit https://www.plaspy.com. For the latest device specific protocol details firmware notes and hardware revisions consult the manufacturer at https://www.globalsat.com.tw/ as implementations and supported features can change over time.
