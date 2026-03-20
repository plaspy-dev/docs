---
slug: /megastek/mt90n/features
id: mt90n-features
sidebar_label: Features
title: Megastek - MT90N Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the Megastek MT90N NB IoT personal GPS tracker and how it integrates with Plaspy for tracking and alerts
keywords:
  - Megastek MT90N features
  - Megastek MT90N GPS tracker
  - MT90N Plaspy compatibility
  - MT90N NB IoT tracker
  - personal GPS tracker features
  - MT90N SOS button
  - MT90N waterproof IP66
  - MT90N Wi Fi LBS positioning
  - MT90N ublox GPS
  - MT90N geo fence alerts
---

# Megastek - MT90N Features

This page covers the public feature context for using the Megastek MT90N with Plaspy. It summarizes the MT90N capabilities that are relevant to Plaspy users, including multi mode positioning, emergency alerts and reporting behavior as described by the manufacturer and in public product material. The focus is on practical, non sensitive details that help you understand how the device works within Plaspy for tracking, alerts and historical playback.

Exact feature availability can vary by firmware version, hardware revision, regional model and how the unit is installed. Battery life, reporting behavior, accessory options and some event types depend on manufacturer implementation and configuration. For device specific technical limits and the latest details consult the official Megastek documentation.

## Feature Overview

The MT90N is a compact NB IoT personal GPS tracker designed for personal safety and light asset monitoring, combining GNSS positioning with Wi Fi and LBS assistance to improve location in built environments. When paired with Plaspy the device can deliver regular location updates, SOS alarms, geo fence events and battery warnings for real time monitoring and historical review.

- Multi mode positioning using GNSS with Wi Fi and LBS assistance to improve fixes indoors and in urban canyons.
- NB IoT connectivity for low power wide area reporting suitable for personal and light asset use.
- Dedicated SOS button for immediate emergency alerts that can be surfaced in Plaspy.
- IP66 IP67 rated enclosure providing dust and water protection for outdoor use.
- Configurable reporting intervals, geo fence alerts and low battery warnings for operational oversight.

## Core Features of Megastek - MT90N

- NB IoT cellular reporting with manufacturer listed bands for wide area low power connectivity.
- u blox GNSS chipset for high sensitivity satellite positioning.
- Wi Fi and LBS assisted positioning to reduce time to first fix and improve accuracy in challenging environments.
- Dedicated SOS button and visible LED status indicators for power, GPS, GSM and battery status.
- IP66 IP67 rated housing for protection against dust and water exposure in normal operating conditions.
- Configurable reporting intervals and support for geo fence and low battery alerts as reported by the device.
- Mini USB charging and simple physical controls for straightforward deployment and maintenance.
- Support for TCP and UDP reporting modes compatible with common tracking platforms.

## How These Features Work with Plaspy

Plaspy ingests location and event messages from the MT90N and presents them alongside other device streams for unified monitoring and historical analysis. Plaspy automatically detects many tracker protocols and maps reported events into the platform view so operators can monitor status and react to alerts without manual protocol handling.

- Real time location updates shown on the Plaspy map according to the device reporting interval.
- SOS alerts from the MT90N become immediate events in Plaspy so operators can trigger a response workflow.
- Geo fence entry and exit events reported by the tracker are surfaced as Plaspy notifications and timeline events.
- Low battery and other status warnings are recorded in Plaspy to support maintenance planning.
- Historical track playback and exported logs allow review of movement and timelines for audits and analysis.

## Typical Use Cases

- Child safety tracking with SOS alerts and assisted positioning for indoor coverage.
- Elder care and lone worker monitoring where unobtrusive, long standby operation is important.
- Pet tracking and boundary alerts using geo fences to support recovery and monitoring.
- Short term vehicle or rental monitoring using higher frequency reporting modes when required.
- Light asset location tracking for portable equipment that needs weather resistance.
- Situations where low power NB IoT connectivity and multi mode positioning improve operational uptime.

## Feature Availability Notes

- Firmware versions and hardware revisions can enable or change specific features such as reporting modes, standby times and event formats.
- Standby and runtime depend heavily on reporting interval, mode (personal versus vehicle), network coverage and configuration.
- Regional NB IoT band support and carrier availability affect connectivity and the suitability of NB IoT for a given deployment.
- Geo fence behavior, SOS handling and status reporting can be influenced by device settings and third party platform mapping.
- Always verify exact capabilities, limits and configuration steps with manufacturer documentation and release notes.

## Why Use Plaspy with These Features

Using the MT90N with Plaspy gives organizations a straightforward way to collect, visualize and act on location and event data from a compact NB IoT personal tracker. Plaspy brings real time maps, alerting and historical playback to the MT90N data stream so teams can maintain situational awareness, respond to SOS events and track devices over time within existing monitoring workflows.

To learn more about Plaspy and how it can integrate MT90N devices into your tracking and telemetry workflows visit https://www.plaspy.com. Device features, firmware behavior and manufacturer details can change over time, so please verify the latest MT90N specifications and implementation notes on the Megastek website https://www.megastek.com/ before deployment.
